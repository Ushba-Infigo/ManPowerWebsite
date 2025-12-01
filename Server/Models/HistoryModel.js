import mongoose from 'mongoose';

const HistoryHeaderSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  Tag: { type: String, required: true },
  Heading: { type: String, required: true },
  Description: { type: String, required: true },
  CreatedAt: { type: String, required: true },
  UpdatedAt: { type: String, required: true },
});

const HistorySchema = new mongoose.Schema({
  _id: { type: String, required: true },
  H_Heading: { type: String, required: true },
  H_Attachment: { type: String, required: true },
  H_Description: { type: String, required: true },
  CreatedAt: { type: String, required: true },
  UpdatedAt: { type: String, required: true },
});

// Check if models already exist
const HistoryHeaders =
  mongoose.models.History || mongoose.model('History', HistoryHeaderSchema, 'History');

const HistoryD =
  mongoose.models.HistoryDetail || mongoose.model('HistoryDetails', HistorySchema, 'HistoryDetails');

export { HistoryHeaders, HistoryD };
