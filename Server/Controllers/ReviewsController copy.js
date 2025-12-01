import { ClientsReviewsHeaders,ReviewDetail } from "../Models/ReviewsModel.js";

export const GetClientsReviewsHeaderData = async (req, res) => {
  try {
    const GetClientsReviews = await ClientsReviewsHeaders.find();

    if (!GetClientsReviews || GetClientsReviews.length === 0) {
      return res.status(404).json({ message: "Data not Exist" });
    }

    return res.status(200).json(GetClientsReviews);
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};
export const GetClientsReviewsData = async (req, res) => {
  try {
    const GetClientsReviews = await ReviewDetail.find();

    if (!GetClientsReviews || GetClientsReviews.length === 0) {
      return res.status(404).json({ message: "Data not Exist" });
    }

    return res.status(200).json(GetClientsReviews);
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};