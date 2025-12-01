import { 
  ArticalInsightDetails, 
  ArticalsInsights, 
  InsightsProfiles 
} from "../Models/InsightArticalModel.js"; 


export const GetArticalAllInsights = async (req, res) => {
  try {
    const data = await ArticalsInsights.find(); 
     if(!data||data.length==0){
           return res.status(404).json({message:"Data Not Exist"})
        }
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const GetArticalInsightDetails = async (req, res) => {
  try {
    const details = await ArticalInsightDetails.find();
      if(!details||details.length==0){
           return res.status(404).json({message:"Data Not Exist"})
        }
    res.status(200).json(details);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const GetProfile = async (req, res) => {
  try {
    const profile = await InsightsProfiles.find();
      if(!profile||profile.length==0){
           return res.status(404).json({message:"Data Not Exist"})
        }
    res.status(200).json(profile);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
