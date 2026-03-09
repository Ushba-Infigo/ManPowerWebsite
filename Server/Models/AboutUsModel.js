import mongoose from 'mongoose';

const aboutUsSchema = new mongoose.Schema({
  TagHeading: {
    type: String,
    required: true,
    default: 'About Us'
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
  Counters: [{
    Heading: {
      type: String,
      required: true
    },
    Value: {
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

aboutUsSchema.pre('save', function(next) {
  this.UpdatedAt = Date.now();
  next();
});

export default mongoose.model('AboutUs', aboutUsSchema);
