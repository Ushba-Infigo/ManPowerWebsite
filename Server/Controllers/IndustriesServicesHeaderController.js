import IndustriesModel from '../Models/IndustriesHeadersModel.js';

export const GetIndustriesandServices = async (req, res) => {
  try {
    const data = await IndustriesModel.find();

    if (!data || data.length === 0) {
      return res.status(404).json({ message: "Data Not Found" });
    }

    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
