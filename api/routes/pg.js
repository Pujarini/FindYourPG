import express from "express";
import {
  createPg,
  deletePg,
  findPg,
  updatePg,
  pgList,
} from "../controllers/pg.js";

const router = express.Router();

//create a pg

router.post("/create", createPg);

//update a pg

router.put("/:id", updatePg);

// delete a pg

router.delete("/:id", deletePg);

router.get("/:id", findPg);

router.get("/", pgList);

export default router;
