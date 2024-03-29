import express from "express";
import { authLogin, authRegister } from "../controller/auth.js";

const router  = express.Router();

router.post('/register' , authRegister)
router.post('/login' , authLogin)

export default router