import {ContactUsModel} from '../Models/ContactUsModel.js'

//GetAboutUs

export const GetContactUsData= async(req,res)=>{

    try
    {
      const ContactUsData=await ContactUsModel.find();
        if(!ContactUsData||ContactUsData.length==0){
           return res.status(404).json({message:"Data Not Exist"})
        }
        return res.status(200).json(ContactUsData);
    } 
    
    catch(error){
            return res.status(500).json({errormessage:error.message})
        }
}