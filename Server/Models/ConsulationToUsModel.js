import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    company: { type: String },
    email: { type: String, required: true },
    phone: { type: String },
    helpType: { type: String },
    message: { type: String }
  },
  { timestamps: true }
);

export default mongoose.model("ConsulationToUs", contactSchema);
