import {Page} from "../Models/EducationModel.js"
//  - Get Slider
export const GetEducationData = async (req, res) => {
  try {
    const GetEduData = await Page.find();
    //console.log("Education Data from DB:", GetEduData);

    if (!GetEduData || GetEduData.length === 0) {
      return res.status(404).json({ message: "Data not Exist" });
    }

    return res.status(200).json(GetEduData);
  }
   catch (error)
    {
    res.status(500).json({ errorMessage: error.message });
    }
};