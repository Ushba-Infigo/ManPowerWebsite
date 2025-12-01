import {FAQs} from "../Models/FAQsModel.js";

export const GetFAQsData = async (req, res) => {
  try {
    const GetFAQs= await FAQs.find();

    if (!GetFAQs || GetFAQs.length === 0) {
      return res.status(404).json({ message: "Data not Exist" });
    }

    return res.status(200).json(GetFAQs);
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};
