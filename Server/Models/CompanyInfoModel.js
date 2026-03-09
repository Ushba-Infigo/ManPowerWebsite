import mongoose from 'mongoose';

const getInTouchSchema = new mongoose.Schema({
  Title: {
    type: String,
    required: true
  },
  Heading: {
    type: String,
    required: true
  },
  Location: {
    type: String,
    required: true
  },
  Phone: {
    type: String,
    required: true
  }, 
   Country: {
    type: String,
    required: false
  },
  Email: {
    type: String,
    required: true
  },
  AttachmentPath: {
    type: String,
    required: false
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

getInTouchSchema.pre('save', function(next) {
  this.UpdatedAt = Date.now();
  next();
});

export default mongoose.model('GetInTouch', getInTouchSchema);
