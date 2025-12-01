import {Insights} from "../Models/InsightsModel.js";

export const GetInsightsData = async (req, res) => {
  try {
    const GetInsights= await Insights.find();

    if (!GetInsights || GetInsights.length === 0) {
      return res.status(404).json({ message: "Data not Exist" });
    }

    return res.status(200).json(GetInsights);
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};
export const GetInsightsDataById = async (req, res) => {
  try {

   const id = req.params.id;   // <--- get ID from URL

    const GetInsights = await Insights.find(); // <--- find by ID
    const item = GetInsights[0].Insights_List.find(
     (x) => x._id.toString() === req.params.id
        );

    if (!item || item.length === 0) {
      return res.status(404).json({ message: "Data not Exist" });
    }

    return res.status(200).json(item);
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};