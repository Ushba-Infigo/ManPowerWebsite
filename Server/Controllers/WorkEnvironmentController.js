import {WorkEnvironments} from '../Models/WorkEnvironmentModel.js'

export const GetWorkEnvironmentsData=async(req,res)=>{

    try{
        const GetWorkEnvironmentsAll=await WorkEnvironments.find();
        if(!GetWorkEnvironmentsAll||GetWorkEnvironmentsAll.length==0){
            return res.status(404).json({message:"Data Not Found"})
        }
        return res.status(200).json(GetWorkEnvironmentsAll);

    }
    catch(error){
     return res.status(500).json({message:error.message})
       }

}