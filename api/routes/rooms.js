import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("romms is working");
});

router.get("/register", (req, res) => {
  res.send("rooms is working register");
});

export default router;
