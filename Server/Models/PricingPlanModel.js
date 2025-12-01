import mongoose from 'mongoose'

const XADCostOptimizationHeaderHeaderSchema=new mongoose.Schema({


_id:{type:String,required:true},
XCO_Tag:{type:String,required:true},
XCO_Heading:{type:String,required:true},
CreatedAt: { type: Date, default: Date.now },
UpdatedAt: { type: Date, default: Date.now }


});

const PotentialSavingSchema = new mongoose.Schema({
    _id:{type:String,required:true},
  Amount: { type: String, required: true },
  Description: { type: String, required: true },
  Categories: { type: [String], required: true }
});

const ServiceSchema = new mongoose.Schema({
    _id:{type:String,required:true},
  ServiceID: { type: String, required: true },
  CountryID: { type: String, required: true },
  Potential_Annual_Savings: [PotentialSavingSchema],
  CreatedAt: { type: Date, default: Date.now },
  UpdatedAt: { type: Date, default: Date.now }
});
const RequestedExpertSchema = new mongoose.Schema({
    _id:{type:String,required:true},
    Requested_Expert: {
      type: String,
      required: true,
    },
    Selected_Service: {
      type: String,
      required: true,
    },
    Selected_Location: {
      type: String,
      required: true,
    },
    Administrative_Cost: {
      type: String,
      required: true,
    },
    Savings_Cost: {
      type: String,
      required: true,
    },
    Selected_ServiceID: {
      type: String,
      required: true,
    },
    Selected_LocationID: {
      type: String,
      required: true,
    }, 
     Percentage: {
      type: String,
      required: true,
    },
     CreatedAt: { type: Date, default: Date.now },
   UpdatedAt: { type: Date, default: Date.now }
});

const CostOptimizationHeaders=mongoose.model("XADCostOptimizationHeader",XADCostOptimizationHeaderHeaderSchema,"XADCostOptimizationHeader");
const PricingPlans=mongoose.model("PricingPlans",ServiceSchema,"PricingPlans");
const ExpertRequests=mongoose.model("Expert_Requests",RequestedExpertSchema,"Expert_Requests");
export{CostOptimizationHeaders,PricingPlans,ExpertRequests};
