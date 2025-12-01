import {IndustriesandServicesmodel,Industry_TabsModel} from '../Models/IndustriesHeadersModel.js'



  export const GetIndustriesandServices=async(req,res)=>{
    try{
 const GetIndustryHeaders= await IndustriesandServicesmodel.find();
 if(!GetIndustryHeaders || GetIndustryHeaders.lenght==0)
    {
    return res.status(404).json({message:"Data Not Found"});
    }
    return res.status(200).json(GetIndustryHeaders)

    }
    catch(error){
    return res.status(500).json({message:error.message})

   }
   }

   

  export const GetIndustriesandServicesTabs=async(req,res)=>{
    try{
 const GetIndustryTabs= await Industry_TabsModel.find();
 console.log("Data from Mongo:", GetIndustryTabs); 
 if(!GetIndustryTabs || GetIndustryTabs.lenght==0)
    {
    return res.status(404).json({message:"Data Not Found"});
    }
    return res.status(200).json(GetIndustryTabs)

    }
    catch(error){
    return res.status(500).json({message:error.message})

   }
   }

   
