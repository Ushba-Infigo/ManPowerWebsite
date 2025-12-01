import {CoreHeaders,CoreD} from '../Models/CoreValuesModel.js'


export const GetCoreHeadersData= async(req,res)=>{

    try
    {
      const CoreHeadersData=await CoreHeaders.find();
        if(!CoreHeadersData||CoreHeadersData.length==0){
           return res.status(404).json({message:"Data Not Exist"})
        }
        return res.status(200).json(CoreHeadersData);
    } 
    
    catch(error){
            return res.status(500).json({errormessage:error.message})
        }
}
export const GetCoreDetailData= async(req,res)=>{

    try
    {
      const CoreDData=await CoreD.find();
        if(!CoreDData||CoreDData.length==0){
           return res.status(404).json({message:"Data Not Exist"})
        }
        return res.status(200).json(CoreDData);
    } 
    
    catch(error){
            return res.status(500).json({errormessage:error.message})
        }
}
//export default AboutUsData;