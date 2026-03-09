import mongoose from 'mongoose';

const workEnvironmentSchema = new mongoose.Schema({
  TagHeading: {
    type: String,
    required: true,
    default: 'Our Work Environment'
  },
  MainHeading: {
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

workEnvironmentSchema.pre('save', function(next) {
  this.UpdatedAt = Date.now();
  next();
});

export default mongoose.model('WorkEnvironment', workEnvironmentSchema);
