import express, { Router } from "express"
import Contact from "../Models/ConsulationToUsModel.js";

const router = express.Router();

router.post("/consulation", async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();

    res.status(201).json({
      success: true,
      message: "Form submitted successfully"
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

//  GET all consultations
router.get("/consulation", async (req, res) => {
  try {
    const allContacts = await Contact.find().sort({ createdAt: -1 }); // latest first
    res.status(200).json(allContacts);
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});
export default router;
