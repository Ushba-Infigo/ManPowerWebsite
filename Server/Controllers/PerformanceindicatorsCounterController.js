import PerformanceCounterSchema from '../Models/PerformanceindicatorsCounterModel.js'

export const  PerformanceCounterData=async(req,res)=>{

    try{
        const  PerformanceCounterAll=await PerformanceCounterSchema.find();
        if(!PerformanceCounterAll||PerformanceCounterAll.length==0){
            return res.status(404).json({message:"Data Not Found"})
        }
        return res.status(200).json(PerformanceCounterAll);

    }
    catch(error){
     return res.status(500).json({message:error.message})
       }

}