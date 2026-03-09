// controllers/industriesdetailController.js
import IndustriesDetail from "../Models/IndustrydetailModel.js";

export const getIndustryByName = async (req, res) => {
  try {
    const { industryName } = req.params;

    if (!industryName) {
      return res.status(400).json({ message: "Industry name is required" });
    }

    // Find the industry in the Industries array
    const industryData = await IndustriesDetail.findOne({
      "Industries.IndustryName": industryName
    }, {
      "Industries.$": 1 // Only return the matched industry
    });

    if (!industryData || industryData.Industries.length === 0) {
      return res.status(404).json({ message: "Industry not found" });
    }

    res.status(200).json(industryData.Industries[0]);
  } catch (error) {
    console.error("Error fetching industry:", error);
    res.status(500).json({ message: "Server error" });
  }
};
