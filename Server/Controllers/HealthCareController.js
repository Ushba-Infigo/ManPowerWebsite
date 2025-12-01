import {Page} from "../Models/HealthCareModel.js"
import OpeningHour from "../Models/OpeningHoursModel.js"
//  - Get Slider
export const GetHealthCareData = async (req, res) => {
  try {
    const GetHealthCareData = await Page.find();
    //console.log("HealthCare Data from DB:", GetHealthCareData);

    if (!GetHealthCareData || GetHealthCareData.length === 0) {
      return res.status(404).json({ message: "Data not Exist" });
    }

    return res.status(200).json(GetHealthCareData);
  }
   catch (error)
    {
    res.status(500).json({ errorMessage: error.message });
    }
};

export const GetOpeningHoursData = async (req, res) => {
  try {
    const GetHoursData = await OpeningHour.find();
    //console.log("HealthCare Data from DB:", GetHealthCareData);

    if (!GetHoursData || GetHoursData.length === 0) {
      return res.status(404).json({ message: "Data not Exist" });
    }

    return res.status(200).json(GetHoursData);
  }
   catch (error)
    {
    res.status(500).json({ errorMessage: error.message });
    }
};