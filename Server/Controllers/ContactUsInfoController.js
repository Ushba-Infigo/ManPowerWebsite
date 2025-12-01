import Contact from '../Models/ContactInfoModel.js'

//GetAboutUs

export const GetContactInfoData= async(req,res)=>{

    try
    {
      const ContactUsData=await Contact.find();
        if(!ContactUsData||ContactUsData.length==0){
           return res.status(404).json({message:"Data Not Exist"})
        }
        return res.status(200).json(ContactUsData);
    } 
    
    catch(error){
            return res.status(500).json({errormessage:error.message})
        }
}
//export default AboutUsData;