import mongoose from 'mongoose'
const PerformanceCounterSchema=new mongoose.Schema({


_id:{type:String,required:true},
PIC_Heading:{type:String,required:true},
PIC_Image:{type:String,required:true},
counter:{type:String,required:true},
CreatedAt:{type:String,required:true},
UpdatedAt:{type:String,required:true}

});

export default mongoose.model("Performance_indicatorsCounter",PerformanceCounterSchema,"Performance_indicatorsCounter");