import mongoose from "mongoose";

const Clientschema = new mongoose.Schema({
  Heading: {
    type: String,
    required: true
  },
  ClientLogo: {
    type: String,
    required: true
  },
  CreatedAt: {
    type: Object,
    required: true
  },
  UpdatedAt: {
    type: Object,
    required: true
  }

});

//Force it to use the "Slider" collection exactly as in Compass
export default mongoose.model("Clients", Clientschema, "Clients");