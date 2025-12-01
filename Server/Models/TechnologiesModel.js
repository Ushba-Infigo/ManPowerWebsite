// models/OpeningHours.js
import mongoose from 'mongoose';

const Technology =  new mongoose.Schema({
  Title: String,
  categories: [{ DayTime: String }]
});

export default mongoose.model("TechnologiesUse", Technology, "TechnologiesUse");