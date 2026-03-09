import mongoose from 'mongoose';

const missionSchema = new mongoose.Schema({
  TagHeading: {
    type: String,
    required: true,
    default: 'About Mission'
  },
  MainHeading: {
    type: String,
    required: true
  },
  Tabs: {
    Mission: {
      TabHeading: {
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
      }
    },
    Vision: {
      TabHeading: {
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
      }
    },
    Goals: {
      TabHeading: {
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
      }
    }
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

missionSchema.pre('save', function(next) {
  this.UpdatedAt = Date.now();
  next();
});

export default mongoose.model('Mission', missionSchema);
