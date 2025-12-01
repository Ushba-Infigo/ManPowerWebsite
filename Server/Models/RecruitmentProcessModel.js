import mongoose from 'mongoose'

const RecruitmentSchema=new mongoose.Schema({


_id:{type:String,required:true},
P_Tag:{type:String,required:true},
P_Heading:{type:String,required:true},
P_Description:{type:String,required:true},
P_Image:{type:String,required:true},
CreatedAt:{type:String,required:true},
UpdatedAt:{type:String,required:true}



});


const RecruitmentRequirementsSchema=new mongoose.Schema({


_id:{type:String,required:true},
P_Tag:{type:String,required:true},
P_Heading:{type:String,required:true},
P_Description:{type:String,required:true},
P_Image:{type:String,required:true},
CreatedAt:{type:String,required:true},
UpdatedAt:{type:String,required:true}



});

const RecruitmentProcess = mongoose.model("RecruitmentProcess",RecruitmentSchema,"RecruitmentProcess");
const RecruitmentRequirements= mongoose.model("Recruitment_Requirements",RecruitmentRequirementsSchema,"Recruitment_Requirements");
export {RecruitmentProcess,RecruitmentRequirements};