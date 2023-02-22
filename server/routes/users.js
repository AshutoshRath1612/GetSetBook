import express from "express";
import { createUser, deleteUser, getallUser, getUser, updateUser } from "../controller/user.js";
import { verifyToken,verifyUser,verifyAdmin } from "../utils/verifytoken.js";

const router  = express.Router();

// router.get("/checkauth" , verifyToken , (req,res,next) => {
//     res.send("hello user,you are now logged in");
// })
// router.get("/checkuser/:id" , verifyUser , (req,res,next) => {
//     res.send("hello user,you are now logged in and you can delete your account");
// })
// router.get("/checkadmin/:id" , verifyAdmin , (req,res,next) => {
//     res.send("hello Admin,you are now logged in and you can delete your account");
// })

//CREATE
router.post('/',verifyUser, createUser);

//UPDATE
router.put('/:id',verifyUser, updateUser);
//DELETE

router.delete('/:id',verifyUser, deleteUser);
//GET
router.get('/:id',verifyUser, getUser);
//GET ALL
router.get('/', verifyAdmin,getallUser);

export default router