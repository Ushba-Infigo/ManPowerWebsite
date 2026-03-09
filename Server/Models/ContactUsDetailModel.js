import mongoose from 'mongoose';

const contactFormSchema = new mongoose.Schema({
  TagHeading: {
    type: String,
    required: true,
    default: 'Contact Us'
  },
  MainHeading: {
    type: String,
    required: true
  },
  Description: {
    type: String,
    required: true
  },
    Country: {
    type: String,
    required: false
  },
  CallUs: {
    type: String,
    required: true
  },
  BenefitDescription: {
    type: String,
    required: true
  },
  WhatHappensNext: {
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

contactFormSchema.pre('save', function(next) {
  this.UpdatedAt = Date.now();
  next();
});

export default mongoose.model('ContactForm', contactFormSchema);
