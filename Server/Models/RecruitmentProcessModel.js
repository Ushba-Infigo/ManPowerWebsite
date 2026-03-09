import mongoose from 'mongoose';

const onboardingSchema = new mongoose.Schema({
  TagHeading: {
    type: String,
    required: true,
    default: 'Onboarding Process'
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

onboardingSchema.pre('save', function(next) {
  this.UpdatedAt = Date.now();
  next();
});

export default mongoose.model('Onboarding', onboardingSchema);
