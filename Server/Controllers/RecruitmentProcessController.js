import {RecruitmentProcess,RecruitmentRequirements} from '../Models/RecruitmentProcessModel.js'

export const GetRecruitmentProcessData=async(req,res)=>{

    try{
        const GetRecruitmentProcessAll=await RecruitmentProcess.find();
        if(!GetRecruitmentProcessAll||GetRecruitmentProcessAll.length==0){
            return res.status(404).json({message:"Data Not Found"})
        }
        return res.status(200).json(GetRecruitmentProcessAll);

    }
    catch(error){
     return res.status(500).json({message:error.message})
       }

}

export const GetRecruitmentRequirementsData=async(req,res)=>{

    try{
        const GetRecruitmentRequirementsAll=await RecruitmentRequirements.find();
        if(!GetRecruitmentRequirementsAll||GetRecruitmentRequirementsAll.length==0){
            return res.status(404).json({message:"Data Not Found"})
        }
        return res.status(200).json(GetRecruitmentRequirementsAll);

    }
    catch(error){
     return res.status(500).json({message:error.message})
       }

}