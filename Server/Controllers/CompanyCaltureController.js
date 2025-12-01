import {CompanyCaltures} from '../Models/CompanyCaltureModel.js'
import {CompanyCalturesDetail} from '../Models/CompanyCaltureDetailModel.js'

export const GetCompanyCaltureData=async(req,res)=>{

    try{
        const GetCompanyCaltureDataAll=await CompanyCaltures.find();
        if(!GetCompanyCaltureDataAll||GetCompanyCaltureDataAll.length==0){
            return res.status(404).json({message:"Data Not Found"})
        }
        return res.status(200).json(GetCompanyCaltureDataAll);

    }
    catch(error){
     return res.status(500).json({message:error.message})
       }

}

export const GetCompanyCaltureDetailData=async(req,res)=>{

    try{
        const GetCompanyCaltureDetailDataAll=await CompanyCalturesDetail.find();
        if(!GetCompanyCaltureDetailDataAll||GetCompanyCaltureDetailDataAll.length==0){
            return res.status(404).json({message:"Data Not Found"})
        }
        return res.status(200).json(GetCompanyCaltureDetailDataAll);
    }
    catch(error){
     return res.status(500).json({message:error.message})
       }

}