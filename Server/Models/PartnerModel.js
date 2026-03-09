import mongoose from 'mongoose';

const partnersSchema = new mongoose.Schema({
  TagHeading: {
    type: String,
    required: true,
    default: 'Partners'
  },
  MainHeading: {
    type: String,
    required: true
  },
  Description: {
    type: String,
    required: true
  },
  ImagePath: {
    type: String,
    required: false
  },
  CreatedAt: {
    type: Date,
    default: Date.now
  },
  UpdatedAt: {
    type: Date,
    default: Date.now
  }
});

partnersSchema.pre('save', function(next) {
  this.UpdatedAt = Date.now();
  next();
});

export default mongoose.model('Partners', partnersSchema);
