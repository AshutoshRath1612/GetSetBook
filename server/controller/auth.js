import User from "../models/User.js";
import bcrypt from "bcrypt";
import createError from "../utils/error.js";
import jwt from "jsonwebtoken";

export const authRegister = async(req, res, next) => {
    try{
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password,salt);
        const newUser = new User({
            username: req.body.username,
            password: hash,
            email: req.body.email
        })
        await newUser.save();
       res.status(200).json(newUser);

    }catch(err){
        console.log(err)
        next(err);
    }

};
export const authLogin = async(req, res, next) => {
    try{
        const user = await User.findOne({username: req.body.username})
        if(!user)
            return next(createError(404,"User not found!"));
        else{
           const iscorrectpass = await bcrypt.compare(req.body.password,user.password);
           if(!iscorrectpass) return next(createError(400 , "Wrong password! or username"));
        }
        const token = jwt.sign({id:user.id, isAdmin:user.isAdmin} , process.env.JWT);

        const {password ,isAdmin , ...others} = user._doc;
        res.cookie("access-token",token,{
            httpOnly:true,
        }).status(200).json({...others});
    }
    catch(err){
        next(err);
    }

};