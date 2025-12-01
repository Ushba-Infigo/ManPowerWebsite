import {MissionDetail} from '../Models/AboutMissionModel.js'

//GetAboutUs

export const GetMissionDetailData= async(req,res)=>{

    try
    {
      const MissionData=await MissionDetail.find();
        if(!MissionData||MissionData.length==0){
           return res.status(404).json({message:"Data Not Exist"})
        }
        return res.status(200).json(MissionData);
    } 
    
    catch(error){
            return res.status(500).json({errormessage:error.message})
        }
}
//export default AboutUsData;