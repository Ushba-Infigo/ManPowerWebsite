import mongoose from 'mongoose'

const ChooseUsHeaderSchema=new mongoose.Schema({


_id:{type:String,required:true},
CU_Tag:{type:String,required:true},
CU_Heading:{type:String,required:true},
CU_Description:{type:String,required:true},
CreatedAt:{type:String,required:true},
UpdatedAt:{type:String,required:true}


});

const ChooseUsSchema=new mongoose.Schema({



_id:{type:String,required:true},
CU_Heading:{type:String,required:true},
CU_Description:{type:String,required:true},
CU_Image:{type:String,required:true},
CreatedAt:{type:String,required:true},
UpdatedAt:{type:String,required:true}
    
});

const ChooseUsHeaders=mongoose.model("ChooseUS",ChooseUsHeaderSchema,"ChooseUS");
const ChooseUsD=mongoose.model("ChooseUSDetails",ChooseUsSchema,"ChooseUSDetails");
export{ChooseUsHeaders,ChooseUsD};