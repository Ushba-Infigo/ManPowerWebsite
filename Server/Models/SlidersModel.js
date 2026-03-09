import mongoose from 'mongoose';

const sliderSchema = new mongoose.Schema({
  Tag: {
    type: String,
    required: true
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
    required: true
  },
  CreatedAt: {
    type: Date,
    default: Date.now
  },
  UpdatedAt: {
    type: Date,
    default: Date.now
  }
});

sliderSchema.pre('save', function(next) {
  this.UpdatedAt = Date.now();
  next();
});

// Model name: 'Slider', collection: 'sliders'
export default mongoose.model('sliders', sliderSchema, 'sliders');
