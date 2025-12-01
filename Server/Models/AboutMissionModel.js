import mongoose from 'mongoose'

const Detail=new mongoose.Schema({


_id:{type:String,required:true},
Tab_Heading:{type:String,required:true},
Tab_Description:{type:String,required:true},
Tab_Attachment:{type:String,required:true},


});

const MissionDetailSchema=new mongoose.Schema({



_id:{type:String,required:true},
Tag:{type:String,required:true},
Heading:{type:String,required:true},
Detail:[Detail],
CreatedAt:{type:String,required:true},
UpdatedAt:{type:String,required:true}
    
});

const MissionDetail=mongoose.model("AboutMission",MissionDetailSchema,"AboutMission");
export {MissionDetail};