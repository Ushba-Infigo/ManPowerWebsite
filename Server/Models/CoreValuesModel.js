import mongoose from 'mongoose';

const coreValuesSchema = new mongoose.Schema({
  TagHeading: {
    type: String,
    required: true,
    default: 'Our Core Values'
  },
  MainHeading: {
    type: String,
    required: true
  },
  Cards: [{
    CardHeading: {
      type: String,
      required: true
    },
    Description: {
      type: String,
      required: true
    },
    IconPath: {
      type: String,
      required: false
    },
    Order: {
      type: Number,
      required: true
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

coreValuesSchema.pre('save', function(next) {
  this.UpdatedAt = Date.now();
  next();
});

export default mongoose.model('CoreValues', coreValuesSchema);
