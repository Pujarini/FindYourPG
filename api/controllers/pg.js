import Pg from "../models/Pgs.js";

export const createPg = async (req, res) => {
  const pg = new Pg(req.body);
  try {
    const savePg = await pg.save();
    res.status(200).json(savePg);
  } catch (error) {
    next(error);
  }
};

export const updatePg = async (req, res) => {
  try {
    const updatedPg = await Pg.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedPg);
  } catch (error) {
    next(error);
  }
};

export const deletePg = async (req, res) => {
  try {
    const deletedpg = await Pg.findByIdAndDelete(req.params.id);
    res.status(200).json("pg deleted");
  } catch (error) {
    next(error);
  }
};

export const findPg = async (req, res) => {
  try {
    const hotel = await Pg.findById(req.params.id);
    res.status(200).json(hotel);
  } catch (error) {
    next(error);
  }
};

export const pgList = async (req, res, next) => {
  try {
    const pg = await Pg.find();
    res.status(200).json(pg);
  } catch (error) {
    next(error);
  }
};
