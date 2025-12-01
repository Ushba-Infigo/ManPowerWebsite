import mongoose from 'mongoose'

const CoreValuesHeaderSchema=new mongoose.Schema({


_id:{type:String,required:true},
Tag:{type:String,required:true},
Heading:{type:String,required:true},
CreatedAt:{type:String,required:true},
UpdatedAt:{type:String,required:true}


});

const  CoreValuesSchema=new mongoose.Schema({



_id:{type:String,required:true},
Tab_Heading:{type:String,required:true},
Tab_Attachment:{type:String,required:true},
Tab_Description:{type:String,required:true},
Tab_Icon:{type:String,required:true},
CreatedAt:{type:String,required:true},
UpdatedAt:{type:String,required:true}
    
});

const CoreHeaders=mongoose.model("CoreValues",CoreValuesHeaderSchema,"CoreValues");
const CoreD=mongoose.model("CoreValuesDetails",CoreValuesSchema,"CoreValuesDetails");
export{CoreHeaders,CoreD};