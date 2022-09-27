import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("user is working");
});

router.get("/register", (req, res) => {
  res.send("user is working register");
});

export default router;
