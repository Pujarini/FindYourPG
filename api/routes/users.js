import express from "express";
import {
  createUser,
  deleteUser,
  findUser,
  updateUser,
  userList,
  getUser,
} from "../controllers/users.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyUser.js";

const router = express.Router();

// router.post("/create", createUser);

// //update a pg

// router.put("/:id", updateUser);

// // delete a pg

// router.delete("/:id", deleteUser);

// router.get("/:id", findUser);

// router.get("/allusers", userList);

// verify token
router.get("/verify", verifyToken, (req, res) => {
  res.send("you are verified");
});

//verify user
router.get("/verify/:id", verifyUser, (req, res) => {
  res.send("hello user! you are authorized");
});

router.get("/verifyAdmin/:id", verifyAdmin, (req, res) => {
  res.send("hello user! you are authorized as admin");
});

export default router;
