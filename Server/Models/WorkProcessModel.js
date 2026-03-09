import mongoose from 'mongoose';

const howItWorksSchema = new mongoose.Schema({
  TagHeading: {
    type: String,
    required: true,
    default: 'How IT WORKS'
  },
  MainHeading: {
    type: String,
    required: true
  },
  Processes: [{
    ProcessHeading: {
      type: String,
      required: true
    },
    Description: {
      type: String,
      required: true
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

howItWorksSchema.pre('save', function(next) {
  this.UpdatedAt = Date.now();
  next();
});

export default mongoose.model('HowItWorks', howItWorksSchema);

