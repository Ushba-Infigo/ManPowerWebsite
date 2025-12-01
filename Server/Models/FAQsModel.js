import mongoose from 'mongoose'

const FAQsListSchema=new mongoose.Schema({

_id:{type:String,required:true},
Question:{type:String,required:true},
Answer:{type:String,required:true},

});

const FAQsSchema = new mongoose.Schema({
 
_id:{type:String,required:true},
FAQ_Heading:{type:String,required:true},
FAQ_SubHeading:{type:String,required:true},
FAQ_List:[FAQsListSchema],
CreatedAt: { type: Date, default: Date.now },
UpdatedAt: { type: Date, default: Date.now }
});
const FAQs = mongoose.model('FAQs', FAQsSchema, 'FAQs');

export{FAQs};