import mongoose from 'mongoose';

const whyChooseUsSchema = new mongoose.Schema({
  TagHeading: {
    type: String,
    required: true,
    default: 'Why Choose Us'
  },
  MainHeading: {
    type: String,
    required: true
  },
  Description: {
    type: String,
    required: true
  },
  Cards: [{
    CardHeading: {
      type: String,
      required: true
    },
    CardDescription: {
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

whyChooseUsSchema.pre('save', function(next) {
  this.UpdatedAt = Date.now();
  next();
});

export default mongoose.model('WhyChooseUs', whyChooseUsSchema);
