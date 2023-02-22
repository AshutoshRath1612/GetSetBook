import express from "express";
import { createHotel, deleteHotel, getallHotel, getHotel, updateHotel } from "../controller/hotel.js";
import { verifyAdmin } from "../utils/verifytoken.js";
const router  = express.Router();

//CREATE
router.post('/',verifyAdmin, createHotel);

//UPDATE
router.put('/:id',verifyAdmin, updateHotel);
//DELETE

router.delete('/:id',verifyAdmin, deleteHotel);
//GET
router.get('/:id', getHotel);
//GET ALL
router.get('/', getallHotel);

export default router