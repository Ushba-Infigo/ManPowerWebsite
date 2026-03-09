import mongoose from 'mongoose';

const faqsSchema = new mongoose.Schema({
  TagHeading: {
    type: String,
    required: true,
    default: 'FAQs'
  },
  MainHeading: {
    type: String,
    required: true
  },
  Accordions: [{
    AccordionHeading: {
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

faqsSchema.pre('save', function(next) {
  this.UpdatedAt = Date.now();
  next();
});

export default mongoose.model('FAQs', faqsSchema);
