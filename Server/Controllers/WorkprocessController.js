import {WorkProcessHeaders,WorkProcessD} from '../Models/WorkProcessModel.js'

export const GetWorkProcessData=async(req,res)=>{

    try{
        const GetWorkProcessHeaderDataAll=await WorkProcessHeaders.find();
        if(!GetWorkProcessHeaderDataAll||GetWorkProcessHeaderDataAll.length==0){
            return res.status(404).json({message:"Data Not Found"})
        }
        return res.status(200).json(GetWorkProcessHeaderDataAll);

    }
    catch(error){
     return res.status(500).json({message:error.message})
       }

}

export const GetWorkProcessDetailData=async(req,res)=>{

    try{
        const GetWorkProcessDataDetailAll=await WorkProcessD.find();
        if(!GetWorkProcessDataDetailAll||GetWorkProcessDataDetailAll.length==0){
            return res.status(404).json({message:"Data Not Found"})
        }
        return res.status(200).json(GetWorkProcessDataDetailAll);

    }
    catch(error){
     return res.status(500).json({message:error.message})
       }

}