// models/OpeningHours.js
import mongoose from 'mongoose';

const OpeningHour =new mongoose.Schema({
  Title: String,
  Time: [{ DayTime: String }]
});
export default mongoose.model("Opening_Hours", OpeningHour, "Opening_Hours");