import {Page} from "../Models/TelecommunicationModel.js"
//  - Get Slider
export const GetTelecommunicationData = async (req, res) => {
  try {
    const GetTelData = await Page.find();
    //console.log("Telecommunication Data from DB:", GetTelData);

    if (!GetTelData || GetTelData.length === 0) {
      return res.status(404).json({ message: "Data not Exist" });
    }

    return res.status(200).json(GetTelData);
  }
   catch (error)
    {
    res.status(500).json({ errorMessage: error.message });
    }
};