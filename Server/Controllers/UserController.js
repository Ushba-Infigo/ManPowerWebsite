import userSchema from '../Models/UserModel.js'

export const GetUserDatabyID=async(req,res)=>{

    try{
         const userId = req.params.id; // assuming you pass id in URL: /users/:id

        const GetUserDatabyID = await userSchema.findById(userId);
        if(!GetUserDatabyID){
            return res.status(404).json({message:"Data Not Found"})
        }
        return res.status(200).json(GetUserDatabyID);

    }
    catch(error){
     return res.status(500).json({message:error.message})
       }

}
export const GetUserData=async(req,res)=>{

    try{
        const GetUserDataAll=await userSchema.find();
        if(!GetUserDataAll||GetUserDataAll.length==0){
            return res.status(404).json({message:"Data Not Found"})
        }
        return res.status(200).json(GetUserDataAll);

    }
    catch(error){
     return res.status(500).json({message:error.message})
       }

}