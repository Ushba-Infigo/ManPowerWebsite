import mongoose from "mongoose";

const CompanyInfoschema = new mongoose.Schema({
     _id: {
    type: String,
    required: true
  },
  Address: {
    type: String,
    required: true
  },
  Email: {
    type: String,
    required: true
  }
  ,
  Email: {
    type: String,
    required: true
  }
  ,
  CreatedAt: {
    type: Object,
    required: true
  },
  UpdatedAt: {
    type: Object,
    required: true
  }

});

//Force it to use the "Slider" collection exactly as in Compass
export default mongoose.model("CompanyContactInfo",CompanyInfoschema, "CompanyContactInfo");