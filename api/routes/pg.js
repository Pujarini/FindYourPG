import express from "express";
import {
  createPg,
  deletePg,
  findPg,
  updatePg,
  pgList,
} from "../controllers/pg.js";
import { verifyAdmin } from "../utils/verifyUser.js";

const router = express.Router();

//create a pg

router.post("/create", verifyAdmin, createPg);

//update a pg

router.put("/:id", verifyAdmin, updatePg);

// delete a pg

router.delete("/:id", verifyAdmin, deletePg);

router.get("/:id", findPg);

router.get("/", pgList);

export default router;
