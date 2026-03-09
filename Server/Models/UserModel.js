
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true,
    minlength: 8
  },
  role: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Role',
    required: true
  },
  isActive: {
    type: Boolean,
    default: true
  },
  IsAdmin: {
    type: Boolean,
    default: false
  },
  ProfilePic: {
    type: String,
    default: null
  },
  JobTitle:{
     type: String,
    default: null
  },
  Bio:{
    type: String,
    default:null
  },
  isVerified: {
  type: Boolean,
  default: false
},
verificationToken: {
  type: String
},
verificationTokenExpiry: {
  type: Date
},
  createdAt: {
    type: Date,
    default: Date.now
  }
})
export default mongoose.model('User', userSchema);