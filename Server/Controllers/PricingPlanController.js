import pricingPlanSchema from '../Models/PricingPlanModel.js'


export const GetCostOptimizationData=async(req,res)=>{

    try{
        const GetCostOptimizationsAll=await pricingPlanSchema.find();
        if(!GetCostOptimizationsAll||GetCostOptimizationsAll.length==0){
            return res.status(404).json({message:"Data Not Found"})
        }
        return res.status(200).json(GetCostOptimizationsAll);

    }
    catch(error){
     return res.status(500).json({message:error.message})
       }

}
