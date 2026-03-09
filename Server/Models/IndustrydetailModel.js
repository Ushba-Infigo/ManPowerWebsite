import mongoose from 'mongoose';

const industriesDetailSchema = new mongoose.Schema({
  Industries: [{
    IndustryName: {
      type: String,
      required: true,
      enum: ['Telecommunication', 'Information Technology', 'Education', 'Healthcare']
    },
    Title: {
      type: String,
      required: true
    },
    Services: [{
      ServiceName: {
        type: String,
        required: true
      },
      Section1: {
        Heading: String,
        Description: String,
        AttachmentPath: String
      },
      Section2: {
        Heading: String,
        Description: String,
        Images: [{
          ImagePath: String,
          Order: Number
        }]
      },
      Order: Number
    }],
    FAQs: {
      Heading: String,
      Description: String,
      Cards: [{
        Question: String,
        Answer: String,
        Order: Number
      }]
    },
    Technologies: {
      SectionHeading: String,
      Tabs: [{
        TabName: String,
        Order: Number
      }]
    },
    Order: Number
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

industriesDetailSchema.pre('save', function(next) {
  this.UpdatedAt = Date.now();
  next();
});

export default mongoose.model('IndustriesDetail', industriesDetailSchema);
