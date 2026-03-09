import mongoose from 'mongoose';

const clientLogoSchema = new mongoose.Schema({
  Heading: {
    type: String,
    required: true
  },
  Logos: [{
    ImagePath: {
      type: String,
      required: true
    },
    IsActive: {
      type: Boolean,
      default: true
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

clientLogoSchema.pre('save', function(next) {
  this.UpdatedAt = Date.now();
  next();
});

export default mongoose.model('ClientLogo', clientLogoSchema);
