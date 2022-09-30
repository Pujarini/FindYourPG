import express from "express";
import {
  createRoom,
  deleteRoom,
  findRoom,
  roomList,
  updateRoom,
} from "../controllers/rooms.js";
import { verifyAdmin } from "../utils/verifyUser.js";

const router = express.Router();

//create a pg

router.post("/createRoom/:pgid", verifyAdmin, createRoom);

//update a pg

router.put("/:id", verifyAdmin, updateRoom);

// delete a pg

router.delete("/:id/:pgid", verifyAdmin, deleteRoom);

router.get("/:id", findRoom);

router.get("/", roomList);

export default router;
