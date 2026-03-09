import mongoose from 'mongoose';

const cultureSchema = new mongoose.Schema({
  CompanyCultureTitle: {
    type: String,
    required: true
  },
  TagHeading: {
    type: String,
    required: true,
    default: 'Our Culture'
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

cultureSchema.pre('save', function(next) {
  this.UpdatedAt = Date.now();
  next();
});

export default mongoose.model('Culture', cultureSchema);
