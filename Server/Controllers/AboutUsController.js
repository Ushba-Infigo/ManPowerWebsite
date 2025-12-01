import AboutUs from '../Models/AboutUsModel.js'

//GetAboutUs

export const GetAboutUsData= async(req,res)=>{

    try
    {
      const AboutUsData=await AboutUs.find();
        if(!AboutUsData||AboutUsData.length==0){
           return res.status(404).json({message:"Data Not Exist"})
        }
        return res.status(200).json(AboutUsData);
    } 
    
    catch(error){
            return res.status(500).json({errormessage:error.message})
        }
}
//export default AboutUsData;