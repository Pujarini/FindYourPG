import Room from "../models/Rooms.js";
import Pg from "../models/Pgs.js";
import { errorHandler } from "../utils/errors.js";

export const createRoom = async (req, res, next) => {
  const pgId = req.params.pgid;
  const newRoom = new Room(req.body);
  try {
    const savedRoom = await newRoom.save();
    try {
      await Pg.findByIdAndUpdate(pgId, {
        $push: { rooms: savedRoom._id },
      });
    } catch (error) {
      next(error);
    }
    res.status(200).json(savedRoom);
  } catch (error) {
    next(error);
  }
};

export const updateRoom = async (req, res, next) => {
  try {
    const updatedRoom = await Room.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedRoom);
  } catch (error) {
    next(error);
  }
};

export const deleteRoom = async (req, res, next) => {
  const pgId = req.params.pgid;
  try {
    await Room.findByIdAndDelete(req.params.id);
    try {
      await Pg.findByIdAndUpdate(pgId, {
        $pull: { rooms: req.params.id },
      });
    } catch (error) {
      next(error);
    }
    res.status(200).json("room deleted succcessfully");
  } catch (error) {
    next(error);
  }
};

export const findRoom = async (req, res, next) => {
  try {
    const room = await Room.findById(req.params.id);
    res.status(200).json(room);
  } catch (error) {
    next(error);
  }
};

export const roomList = async (req, res, next) => {
  try {
    const room = await Room.find();
    res.status(200).json(room);
  } catch (error) {
    next(error);
  }
};
