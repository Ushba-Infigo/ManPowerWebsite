import mongoose from "mongoose";

const AboutUsDetailSchema= new mongoose.Schema({
    
Detail_Description :{
    type:String,
    required:true
}

});
const AboutUsCounterSchema= new mongoose.Schema({
    
Counter :{
    type:String,
    required:true
},
Counter_Desc :{
    type:String,
    required:true
}
});
const AboutUsSchema= new mongoose.Schema({

About_Heading:{
    type:String,
    required:true

},
About_Description:{
    type:String,
    required:true
},
About_Image:{
    type:String,
    required:true
},
About_Tag:{
    type:String,
    required:true
},
About_Detail:[AboutUsDetailSchema],

Detail_Counter:[AboutUsCounterSchema],
CreatedAt:{
    type:String,
    required:true
},
UpdateddAt:{
    type:String,
    required:true
}
});
//Force it to use the "AboutUs" collection exactly as in Compass
export default mongoose.model("AboutUs",AboutUsSchema,"AboutUs")