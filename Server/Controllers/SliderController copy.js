import Slider from "../Models/SlidersModel.js"
//  - Get Slider
export const GetSliderData = async (req, res) => {
  try {
    const GetSliders = await Slider.find();
    console.log("Sliders from DB:", GetSliders);

    if (!GetSliders || GetSliders.length === 0) {
      return res.status(404).json({ message: "Data not Exist" });
    }

    return res.status(200).json(GetSliders);
  }
   catch (error)
    {
    res.status(500).json({ errorMessage: error.message });
    }
};