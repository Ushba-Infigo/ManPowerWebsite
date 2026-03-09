import mongoose from 'mongoose';

const insightsSchema = new mongoose.Schema({
  TagHeading: {
    type: String,
    required: true,
    default: 'Insights'
  },
  MainHeading: {
    type: String,
    required: true
  },
  InsightCards: [{
    IndustryHeading: {
      type: String,
      required: true
    },
    BlogHeading: {
      type: String,
      required: true
    },
    Description: {
      type: String,
      required: true
    },
     detailDescription: {
      type: String,
      default: ""
    },
    ImagePath: {
      type: String,
      required: false
    },
    UserName: {
      type: String,
      required: false
    },
    UserImagePath: {
      type: String,
      required: false
    },
    UploadDate: {
      type: Date,
      required: false
    },
    IsEnabled: {
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

insightsSchema.pre('save', function(next) {
  this.UpdatedAt = Date.now();
  next();
});

export default mongoose.model('Insights', insightsSchema);
