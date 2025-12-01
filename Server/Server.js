import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import route from './Routers/SliderRoute.js';

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

app.use(bodyParser.json());

//  Important: put this AFTER CORS (cors is used for front and back connectivity) setup
app.use('/api', route);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('DB Connected Successfully ManPowerDB'))
  .catch(err => console.error(err));
app.listen(8001, () => console.log('Port is running on 8001'));
