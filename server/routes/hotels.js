import express from "express";
import { countByCity, countByType, createHotel, deleteHotel, getallHotel, getHotel, getHotelRooms, updateHotel } from "../controller/hotel.js";
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


router.get('/find/countByCity', countByCity);
router.get('/find/countByType', countByType);
router.get('/room/:id', getHotelRooms);

export default router