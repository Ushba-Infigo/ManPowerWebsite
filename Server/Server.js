import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import route from './Routers/SliderRoute.js';
import router from './Routers/consulationtoUs.js';
import sitemapRouter from './Routers/sitemap.js';
import path from 'path';
import http from 'http';
import { Server } from 'socket.io';
import ReviewModel from './Models/ReviewsModel.js';

const app = express();
dotenv.config();
dotenv.config({ path: './.env' });
console.log("Mongo URI:", process.env.MONGO_URI);


app.use(cors({
  origin: "http://localhost:3000",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true
}));

// Global header fallback
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});
app.get('/test', (req, res) => {
  res.send('Server is reachable!');
});
app.use(bodyParser.json());

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
  }
});

// Fallback Database Polling mechanism
// This replaces Change Streams (which need Replica Set) and Middleware (which misses external CMS updates)
const previousHashes = {};

setInterval(async () => {
  if (mongoose.connection.readyState !== 1) return;

  try {
    let changed = false;
    const modelNames = mongoose.modelNames();

    for (const modelName of modelNames) {
      const Model = mongoose.model(modelName);

      // Get the count and the latest document's updatedAt timestamp
      const count = await Model.countDocuments();
      let latestDoc = null;
      try {
        latestDoc = await Model.findOne().sort({ UpdatedAt: -1, updatedAt: -1, _id: -1 }).select('UpdatedAt updatedAt createdAt _id').lean();
      } catch (e) {
        // Some collections might not support sort or lean properly
      }

      const timeVal = latestDoc ? (latestDoc.UpdatedAt || latestDoc.updatedAt || latestDoc.createdAt || latestDoc._id).toString() : 'empty';
      const hash = `${count}-${timeVal}`;

      if (previousHashes[modelName] !== undefined && previousHashes[modelName] !== hash) {
        changed = true;
      }
      previousHashes[modelName] = hash;
    }

    if (changed) {
      console.log('Database change detected via polling! Emitting contentUpdated...');
      io.emit('contentUpdated');
    }
  } catch (err) {
    console.error('Polling error:', err);
  }
}, 2000); // Poll every 2 seconds

//  Important: put this AFTER CORS (cors is used for front and back connectivity) setup
app.use('/api', route);
app.use('/api', router);
app.use('/', sitemapRouter);

app.get("/api/reviews", async (req, res) => {
  try {
    const reviews = await ReviewModel.find().lean(); // Fetch all reviews from DB
    res.json(reviews);
  } catch (err) {
    console.error("Error fetching reviews:", err.message);
    res.status(500).json({ error: "Failed to fetch reviews from database" });
  }
});
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('DB Connected Successfully ManPowerDB');
  })
  .catch(err => console.error(err));

server.listen(8001, () => console.log('Port is running on 8001'));


const __dirname = path.resolve(); // Needed if using ES Modules

app.use('/img', express.static(path.join(__dirname, 'public/img')));