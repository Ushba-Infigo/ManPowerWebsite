import mongoose from 'mongoose'



const EnvironmentSchema = new mongoose.Schema({

_id: { type: String, required: true },
Tag: { type: String, required: true },
Heading: { type: String, required: true },
Description: { type: String, required: true },
Description_Details: { type: [String], default: [] },
Images: { type: [String], default: [] },
  CreatedAt: { type: Date, default: Date.now },
  UpdatedAt: { type: Date, default: Date.now }


});

const WorkEnvironments=mongoose.model("WorkEnvironment",EnvironmentSchema,"WorkEnvironment");
export{WorkEnvironments};
