import mongoose from 'mongoose';

const callToActionSchema = new mongoose.Schema({
  MainHeading: {
    type: String,
    required: true
  },
  PhoneNumber: {
    type: String,
    required: true
  },
  Description: {
    type: String,
    required: true
  },
    Country: {
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

callToActionSchema.pre('save', function(next) {
  this.UpdatedAt = Date.now();
  next();
});

export default mongoose.model('CallToAction', callToActionSchema);
