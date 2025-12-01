import mongoose from 'mongoose'





const ContactUsDetailSchema = new mongoose.Schema({
 _id:{type:String,required:true},
  Tag: { type: String, required: true },
  Heading: { type: String, required: true },
  Description: { type: String, required: true },
  ContactNo: { type: String, required: true },
  Benefits: { type: [String], default: [] },
  HappenNext: { type: [String], default: [] },
  CreatedAt: { type: Date, default: Date.now },
  UpdatedAt: { type: Date, default: Date.now }
});


const ContactUs=mongoose.model("ContactUsDetail",ContactUsDetailSchema,"ContactUsDetail");
export{ContactUs};
