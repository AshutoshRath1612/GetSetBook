import express from "express";
import { createRoom, deleteRoom, getallRoom, getRoom, updateRoom } from "../controller/rooms.js";
import { verifyAdmin } from "../utils/verifytoken.js";
const router  = express.Router();

//CREATE
router.post('/:hotelid',verifyAdmin, createRoom);

//UPDATE
router.put('/:id',verifyAdmin, updateRoom);
//DELETE

router.delete('/:id/:hotelid',verifyAdmin, deleteRoom);
//GET
router.get('/:id', getRoom);
//GET ALL
router.get('/', getallRoom);

export default router