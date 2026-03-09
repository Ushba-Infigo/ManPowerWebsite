import howItWorksSchema from '../Models/WorkProcessModel.js'

export const GetWorkProcessData=async(req,res)=>{

    try{
        const GetWorkProcessHeaderDataAll=await howItWorksSchema.find();
        if(!GetWorkProcessHeaderDataAll||GetWorkProcessHeaderDataAll.length==0){
            return res.status(404).json({message:"Data Not Found"})
        }
        return res.status(200).json(GetWorkProcessHeaderDataAll);

    }
    catch(error){
     return res.status(500).json({message:error.message})
       }

}
