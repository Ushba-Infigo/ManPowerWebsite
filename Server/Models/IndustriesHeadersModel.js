import mongoose from 'mongoose';

const industriesSchema = new mongoose.Schema({
  TagHeading: {
    type: String,
    required: true,
    default: 'Industries & Services'
  },
  MainHeading: {
    type: String,
    required: true
  },
  Industries: [{
    Name: {
      type: String,
      required: true,
      enum: ['Telecommunication', 'Information Technology', 'Education', 'Healthcare']
    },
    IndustryHeading: {
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

industriesSchema.pre('save', function(next) {
  this.UpdatedAt = Date.now();
  next();
});

const IndustriesModel = mongoose.model("Industries", industriesSchema);

export default IndustriesModel;
