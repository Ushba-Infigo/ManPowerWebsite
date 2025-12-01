import mongoose from 'mongoose'

const ConsultationBannerSchema=new mongoose.Schema({


_id:{type:String,required:true},
C_Title:{type:String,required:true},
C_Heading:{type:String,required:true},
C_PhoneNumber:{type:String,required:true},
C_PhoneIcon:{type:String,required:true},
C_CreatedAt:{type:String,required:true},
C_UpdatedAt:{type:String,required:true}



});
export default mongoose.model("ConsultationBanner",ConsultationBannerSchema,"ConsultationBanner");