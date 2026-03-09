import mongoose from 'mongoose';

const pricingPlanSchema = new mongoose.Schema({
  Location: {
    type: String,
    required: true,
    enum: ['United States', 'United Kingdom', 'Canada']
  },
  Industry: {
    type: String,
    required: true,
    enum: ['Healthcare', 'Consultation', 'Support']
  },
  PricingRows: [{
    SerialNo: {
      type: Number,
      required: true
    },
    Range: {
      type: Number,
      required: true
    },
    DirectAmount: {
      type: Number,
      required: true,
      default: 0
    },
    IndirectAmount: {
      type: Number,
      required: true,
      default: 0
    },
    Percentage: {
      type: Number,
      required: true,
      default: 0
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

// Compound index to ensure unique location-industry combinations
pricingPlanSchema.index({ Location: 1, Industry: 1 }, { unique: true });

pricingPlanSchema.pre('save', function(next) {
  this.UpdatedAt = Date.now();
  next();
});

export default mongoose.model('PricingPlan', pricingPlanSchema);
