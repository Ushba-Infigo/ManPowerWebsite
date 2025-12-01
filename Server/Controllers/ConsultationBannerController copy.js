import ConsultationBannerSchema from '../Models/ConsultationBannerModel.js'

//GetAboutUs

export const GetConsultationBannerData= async(req,res)=>{

    try
    {
      const ConsultationBannerData=await ConsultationBannerSchema.find();
        if(!ConsultationBannerData||ConsultationBannerData.length==0){
           return res.status(404).json({message:"Data Not Exist"})
        }
        return res.status(200).json(ConsultationBannerData);
    } 
    
    catch(error){
            return res.status(500).json({errormessage:error.message})
        }
}
//export default AboutUsData;