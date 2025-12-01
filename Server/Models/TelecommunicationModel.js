import mongoose from  "mongoose";

// FAQ Question sub-schema
const faqQuestionSchema = new mongoose.Schema({
  q: { type: String, required: true },
  a: { type: String, required: true }
});

// Section inside each service
const sectionSchema = new mongoose.Schema({
  heading: { type: String, required: true },
  description: { type: [String], required: true }, // array of strings (paragraphs or bullet points)
  images: { type: [String], default: [] }         // array of image filenames
});

// FAQs object inside each service
const faqSchema = new mongoose.Schema({
  Heading: { type: String, default: "Most Common Questions" },
  Description: { type: String },
  questions: { type: [faqQuestionSchema], default: [] }
});

// Individual Service
const serviceSchema = new mongoose.Schema({
  serviceName: { type: String, required: true },
  sections: { type: [sectionSchema], default: [] },
  faqs: { type: faqSchema, default: () => ({}) }
});

// Main Page Model (used for Technologies, Industries, Services, etc.)
const PageSchema = new mongoose.Schema({

   _id: { type: String, required: true }, 
  title: { type: String, required: true },
  services: { type: [serviceSchema], default: [] }, // for service/industry pages
  //  Add any of these optional fields when needed 
  // categories: [String],           // for Technologies page
  // Time: [String],                 // for Opening Hours
  // heading: String,                // simple pages
  // activeTab: String,
  CreatedAt: { type: Date, default: Date.now },
  UpdatedAt: { type: Date, default: Date.now }
});

// Auto-update UpdatedAt on save
PageSchema.pre('save', function(next) {
  this.UpdatedAt = Date.now();
  next();
});

// Create the model (you can name it anything)
const Page = mongoose.model('Industries_Telecommunication', PageSchema,'Industries_Telecommunication');   // Collection name will be "pages"

export {Page };