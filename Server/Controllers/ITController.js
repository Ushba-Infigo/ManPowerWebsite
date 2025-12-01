import {Page} from "../Models/ITModel.js"
import Technology from "../Models/TechnologiesModel.js"
//  - Get Slider
export const GetITData = async (req, res) => {
  try {
    const GetITData = await Page.find();
    //console.log("IT Data from DB:", GetITData);

    if (!GetITData || GetITData.length === 0) {
      return res.status(404).json({ message: "Data not Exist" });
    }

    return res.status(200).json(GetITData);
  }
   catch (error)
    {
    res.status(500).json({ errorMessage: error.message });
    }
};

export const GetTechnologiesData = async (req, res) => {
  try {
    const GetTechnogyData = await Technology.find();
    //console.log("Technologies Data from DB:", GetTechnologiesData);

    if (!GetTechnogyData || GetTechnogyData.length === 0) {
      return res.status(404).json({ message: "Data not Exist" });
    }

    return res.status(200).json(GetTechnogyData);
  }
   catch (error)
    {
    res.status(500).json({ errorMessage: error.message });
    }
};