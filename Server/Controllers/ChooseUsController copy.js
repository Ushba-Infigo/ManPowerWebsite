import {ChooseUsHeaders,ChooseUsD} from '../Models/ChooseUsModel.js'

export const GetChooseUsData=async(req,res)=>{

    try{
        const GetChooseUsHeadersAll=await ChooseUsHeaders.find();
        if(!GetChooseUsHeadersAll||GetChooseUsHeadersAll.length==0){
            return res.status(404).json({message:"Data Not Found"})
        }
        return res.status(200).json(GetChooseUsHeadersAll);

    }
    catch(error){
     return res.status(500).json({message:error.message})
       }

}

export const GetChooseUsDetailData=async(req,res)=>{

    try{
        const GetChooseUsDetailAll=await ChooseUsD.find();
        if(!GetChooseUsDetailAll||GetChooseUsDetailAll.length==0){
            return res.status(404).json({message:"Data Not Found"})
        }
        return res.status(200).json(GetChooseUsDetailAll);

    }
    catch(error){
     return res.status(500).json({message:error.message})
       }

}