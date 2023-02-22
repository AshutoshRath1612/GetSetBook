import User from "../models/User.js";
export const createUser = async(req,res,next)=>{
    try{
        const savedUser  = await newUser.save();
        res.status(200).json(savedUser);
    }
    catch(err){
       next(err);
    }
};

export const updateUser =async(req,res,next)=>{
    try{
        const updateUser  = await User.findByIdAndUpdate(req.params.id, req.body, {new: true} );
        res.status(200).json(updateUser);
    }
    catch(err){
       next(err);
    }
};
export const deleteUser =async(req,res,next)=>{
    try{
        const delteUser  = await User.findByIdAndDelete(req.params.id);
        res.status(200).send("User deleted successfully");
    }
    catch(err){
        next(err);
    }
};
export const getUser =async(req,res,next)=>{
    try{
        const getUser  = await User.findById(req.params.id);
        res.status(200).json(getUser);
    }
    catch(err){
        next(err);
    }
};
export const getallUser =async(req,res,next)=>{
    try{
        const getallUser  = await User.find();
        res.status(200).json(getallUser);
    }
    catch(err){
        next(err);
    }
};