import express from "express";
import Hotel from "../models/Hotel.js";
import { deleteHotel, getHotel, getHotels, updateHotel,  createHotel} from "../controller/hotel.js";
const router = express.Router();

//Create
router.post("/",  createHotel);
//Update

router.put("/:id", updateHotel);

//Delete
router.delete("/:id", deleteHotel);
//Get All
router.get("/:id", getHotel);

router.get("/", getHotels);

export default router;