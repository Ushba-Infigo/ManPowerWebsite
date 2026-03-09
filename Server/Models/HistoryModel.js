import mongoose from 'mongoose';

const historySchema = new mongoose.Schema({
  TagHeading: {
    type: String,
    required: true,
    default: 'Our History'
  },
  MainHeading: {
    type: String,
    required: true
  },
  Description: {
    type: String,
    required: true
  },
  Sections: [{
    SectionHeading: {
      type: String,
      required: true
    },
    SectionDescription: {
      type: String,
      required: true
    },
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

historySchema.pre('save', function(next) {
  this.UpdatedAt = Date.now();
  next();
});

export default mongoose.model('History', historySchema);
