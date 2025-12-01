import mongoose  from "mongoose";
//Schema 1
const IndustriesServicesSchema= new mongoose.Schema({

    Industry_Heading:{

        type:String,
        required:true
    },
    Industry_Tag:{

        type:String,
        required:true
    },
    CreatedAt:{
        type:String,
        required:true
    },
    UpdateAt:{
        type:String,
        required:true
    }

});
//Schema 2
const IndustriesServicesSchemaTABs= new mongoose.Schema({

    Tab:{

        type:String,
        required:true
    },
    Tab_Description:{

        type:String,
        required:true
    },
    Tab_Bullets:{

        type:String,
        required:true
    },
    Tab_Heading:{

        type:String,
        required:true
    }  ,
    Tab_Image:{

        type:String,
        required:true
    }
    ,
    CreatedAt:{
        type:String,
        required:true
    },
    UpdateAt:{
        type:String,
        required:true
    }

});



//Force it to use the "IndustriesandServices" collection exactly as in Compass
const  IndustriesandServicesmodel= mongoose.model("IndustriesandServices",IndustriesServicesSchema,"IndustriesandServices");
const  Industry_TabsModel=  mongoose.model("Industriesand ServicesTabs",IndustriesServicesSchemaTABs,"Industriesand ServicesTabs");
export{IndustriesandServicesmodel,Industry_TabsModel}