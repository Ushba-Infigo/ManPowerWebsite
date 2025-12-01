import mongoose from 'mongoose'

const WorkProcessHeaderSchema=new mongoose.Schema({


_id:{type:String,required:true},
W_Tag:{type:String,required:true},
W_Heading:{type:String,required:true},
CreatedAt:{type:String,required:true},
UpdatedAt:{type:String,required:true}


});

const WorkProcessSchema=new mongoose.Schema({



_id:{type:String,required:true},
RR_Heading:{type:String,required:true},
RR_Description:{type:String,required:true},
RR_Image:{type:String,required:true},
CreatedAt:{type:String,required:true},
UpdatedAt:{type:String,required:true}
    
});

const WorkProcessHeaders=mongoose.model("WorkProcessHeader",WorkProcessHeaderSchema,"WorkProcessHeader");
const WorkProcessD=mongoose.model("WorkProcess",WorkProcessHeaderSchema,"WorkProcess");
export{WorkProcessHeaders,WorkProcessD};
