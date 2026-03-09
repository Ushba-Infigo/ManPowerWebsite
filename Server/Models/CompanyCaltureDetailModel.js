import mongoose from 'mongoose';

const companyCultureSchema = new mongoose.Schema({
  TagHeading: {
    type: String,
    required: true,
    default: 'Company Culture'
  },
  Heading: {
    type: String,
    required: true
  },
  Description: {
    type: String,
    required: true
  },
  Images: [{
    ImagePath: {
      type: String,
      required: true
    },
    ImageType: {
      type: String,
      required: true,
      enum: ['Company Event', 'New Year', 'Team Building', 'Office Space', 'Achievement', 'Other']
    },
    IsActive: {
      type: Boolean,
      default: true
    },
    Order: {
      type: Number,
      required: true
    },
    UploadedAt: {
      type: Date,
      default: Date.now
    }
  }],
  CreatedAt: {
    type: Date,
    default: Date.now
  },
  UpdatedAt: {
    type: Date,
    default: Date.now
  }
});

companyCultureSchema.pre('save', function(next) {
  this.UpdatedAt = Date.now();
  next();
});

export default mongoose.model('CompanyCulture', companyCultureSchema);
