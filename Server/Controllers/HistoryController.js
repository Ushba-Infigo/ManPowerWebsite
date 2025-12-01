import {HistoryHeaders,HistoryD} from '../Models/HistoryModel.js'


export const GetHistoryData= async(req,res)=>{

    try
    {
      const HistoryData=await HistoryHeaders.find();
        if(!HistoryData||HistoryData.length==0){
           return res.status(404).json({message:"Data Not Exist"})
        }
        return res.status(200).json(HistoryData);
    } 
    
    catch(error){
            return res.status(500).json({errormessage:error.message})
        }
}
export const GetHistoryDetailData= async(req,res)=>{

    try
    {
      const HistoryDData=await HistoryD.find();
        if(!HistoryDData||HistoryDData.length==0){
           return res.status(404).json({message:"Data Not Exist"})
        }
        return res.status(200).json(HistoryDData);
    } 
    
    catch(error){
            return res.status(500).json({errormessage:error.message})
        }
}
//export default AboutUsData;