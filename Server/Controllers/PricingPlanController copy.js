import {CostOptimizationHeaders,PricingPlans,ExpertRequests} from '../Models/PricingPlanModel.js'


export const GetCostOptimizationData=async(req,res)=>{

    try{
        const GetCostOptimizationsAll=await CostOptimizationHeaders.find();
        if(!GetCostOptimizationsAll||GetCostOptimizationsAll.length==0){
            return res.status(404).json({message:"Data Not Found"})
        }
        return res.status(200).json(GetCostOptimizationsAll);

    }
    catch(error){
     return res.status(500).json({message:error.message})
       }

}

export const GetPricingPlansData=async(req,res)=>{

    try{
        const GetPricingPlansAll=await PricingPlans.find();
        if(!GetPricingPlansAll||GetPricingPlansAll.length==0){
            return res.status(404).json({message:"Data Not Found"})
        }
        return res.status(200).json(GetPricingPlansAll);

    }
    catch(error){
     return res.status(500).json({message:error.message})
       }

}

export const GetExpertRequestsData=async(req,res)=>{

    try{
        const GetExpertRequestsAll=await ExpertRequests.find();
        if(!GetExpertRequestsAll||GetExpertRequestsAll.length==0){
            return res.status(404).json({message:"Data Not Found"})
        }
        return res.status(200).json(GetExpertRequestsAll);

    }
    catch(error){
     return res.status(500).json({message:error.message})
       }

}