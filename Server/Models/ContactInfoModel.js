import mongoose from 'mongoose';

const Contact =new mongoose.Schema({
    _id: {type:String,require:true},
  Heading: {type:String,require:true},
  Number:  {type:String,require:true},
});
export default mongoose.model("ContactUsInfo", Contact, "ContactUsInfo");