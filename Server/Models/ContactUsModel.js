import mongoose from 'mongoose'





const ContactUschema = new mongoose.Schema({
 _id:{type:String,required:true},
Title: { type: String, required: true },
Heading: { type: String, required: true },
Location: { type: String, required: true },
PhoneNo: { type: String, required: true },
Email: { type: String, required: true },
Attachment: { type: String, required: true },
CreatedAt: { type: String, required: true },
UpdatedAt: { type: String, required: true },
});


const ContactUsModel=mongoose.model("GetInTouch",ContactUschema,"GetInTouch");
export{ContactUsModel};