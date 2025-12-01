import mongoose from 'mongoose'

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

const InsightsSchema = new mongoose.Schema({
 
_id:{type:String,required:true},
Insight_Tag:{type:String,required:true},
Insight_Heading:{type:String,required:true},
Insights_List:[InsightsListSchema],
CreatedAt: { type: Date, default: Date.now },
UpdatedAt: { type: Date, default: Date.now }
});
const Insights = mongoose.model('Insights', InsightsSchema, 'Insights');

export{Insights};