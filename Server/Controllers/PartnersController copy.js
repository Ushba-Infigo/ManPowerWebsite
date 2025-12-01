import PartenersSchema from '../Models/PartnerModel.js'

export const GetPartnersData=async(req,res)=>{

    try{
        const GetPartnersAll=await PartenersSchema.find();
        if(!GetPartnersAll||GetPartnersAll.length==0){
            return res.status(404).json({message:"Data Not Found"})
        }
        return res.status(200).json(GetPartnersAll);

    }
    catch(error){
     return res.status(500).json({message:error.message})
       }

}
