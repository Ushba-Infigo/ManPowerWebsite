import mongoose from "mongoose";

const Sliderschema = new mongoose.Schema({
  Tag: {
    type: String,
    required: true
  },
  Heading: {
    type: String,
    required: true
  },
  Description: {
    type: String,
    required: true
  },
  ImagePath: {
    type: String,
    required: true
  }

});

//Force it to use the "Slider" collection exactly as in Compass
export default mongoose.model("Slider", Sliderschema, "Slider");
