import mongoose from 'mongoose'

const ReviewHeaderSchema=new mongoose.Schema({


_id:{type:String,required:true},
R_Tag:{type:String,required:true},
R_Heading:{type:String,required:true},
R_SubHeading:{type:String,required:true},
CreatedAt: { type: Date, default: Date.now },
UpdatedAt: { type: Date, default: Date.now }


});

const ReviewListSchema = new mongoose.Schema({
 
_id:{type:String,required:true},
ClientImage:{type:String,required:true},
ClientName:{type:String,required:true},
ClientDesignation:{type:String,required:true},
CompanyLogo:{type:String,required:true},
Rating:{type:String,required:true},
ReviewText:{type:String,required:true},
});

const ReviewDetailSchema = new mongoose.Schema({
    _id:{type:String,required:true},
  Review_Heading: { type: String, required: true },
  Review_SubHeading: { type: String, required: true },
  Review_List: [ReviewListSchema],
  CreatedAt: { type: Date, default: Date.now },
  UpdatedAt: { type: Date, default: Date.now }
});

const ClientsReviewsHeaders = mongoose.model('ClientsReviews', ReviewHeaderSchema, 'ClientsReviews');
const ReviewDetail = mongoose.model('ClientsReviews_Details', ReviewDetailSchema, 'ClientsReviews_Details');

export{ClientsReviewsHeaders,ReviewDetail};
