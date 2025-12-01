import mongoose from 'mongoose'

const PartenersSchema=new mongoose.Schema({


_id:{type:String,required:true},
P_Tag:{type:String,required:true},
P_Heading:{type:String,required:true},
P_Description:{type:String,required:true},
P_Image:{type:String,required:true},
CreatedAt:{type:String,required:true},
UpdatedAt:{type:String,required:true}



});
export default mongoose.model("Partners",PartenersSchema,"Partners");