import mongoose from 'mongoose'

const InsightsArticalDescriptionSchema=new mongoose.Schema({


_id:{type:String,required:true},
Title:{type:String,required:true},
Heading1:{type:String,required:true},
Description1:{type:String,required:true},
Heading2:{type:String,required:true},
Description2:{type:String,required:true},
Heading3:{type:String,required:true},
Description3:{type:String,required:true},
Heading4:{type:String,required:true},
Description4:{type:String,required:true},
Heading5:{type:String,required:true},
Description5:{type:String,required:true},
Heading6:{type:String,required:true},
Description6:{type:String,required:true},
Heading7:{type:String,required:true},
Description7:{type:String,required:true},
P_Image:{type:String,required:true},
CreatedAt:{type:String,required:true},
UpdatedAt:{type:String,required:true}


});

const InsightsListSchema=new mongoose.Schema({

_id:{type:String,required:true},

Category:{type:String,required:true},
Title:{type:String,required:true},
Description:{type:String,required:true},
AuthorName:{type:String,required:true},
AuthorImage:{type:String,required:true},
PublishDate:{type:String,required:true},
CoverImage:{type:String,required:true},

});
const InsightsArticalSchema=new mongoose.Schema({


_id:{type:String,required:true},
Title:{type:String,required:true},
Insights_List:[InsightsListSchema],
CreatedAt:{type:String,required:true},
UpdatedAt:{type:String,required:true}


});
const InsightsProficleSchema=new mongoose.Schema({


_id:{type:String,required:true},
Name:{type:String,required:true},
Designation:{type:String,required:true},
LinkedInLink:{type:String,required:true},
Description:{type:String,required:true},
Attachment:{type:String,required:true},
CreatedAt:{type:String,required:true},
UpdatedAt:{type:String,required:true}


});
var ArticalInsightDetails = mongoose.model("ArticalInsightDetails",InsightsArticalDescriptionSchema,"ArticalInsightDetails");
var ArticalsInsights = mongoose.model("ArticalsInsights",InsightsArticalSchema,"ArticalsInsights");
var InsightsProfiles = mongoose.model("ProfileDetail",InsightsProficleSchema,"ProfileDetail");
export {ArticalInsightDetails, ArticalsInsights, InsightsProfiles}