import Core from '../Models/CoreValuesModel.js'


export const GetCoreData= async(req,res)=>{

    try
    {
      const CoreHeadersData=await Core.find();
        if(!CoreHeadersData||CoreHeadersData.length==0){
           return res.status(404).json({message:"Data Not Exist"})
        }
        return res.status(200).json(CoreHeadersData);
    } 
    
    catch(error){
            return res.status(500).json({errormessage:error.message})
        }
}

//export default AboutUsData;