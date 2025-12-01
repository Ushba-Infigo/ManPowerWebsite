import CompanyInfoschema from "../Models/CompanyInfoModel.js";

export const GetCompanyInfoData = async (req, res) => {
  try {
    const GetCompanyInfo= await CompanyInfoschema.find();

    if (!GetCompanyInfo || GetCompanyInfo.length === 0) {
      return res.status(404).json({ message: "Data not Exist" });
    }

    return res.status(200).json(GetCompanyInfo);
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};