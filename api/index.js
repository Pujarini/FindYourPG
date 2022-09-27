import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import roomRoutes from "./routes/rooms.js";
import pgRoutes from "./routes/pg.js";

const app = express();
dotenv.config();

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI);
    console.log("db connected");
  } catch (error) {
    throw new Error("Db not connected");
  }
};

mongoose.connection.on("disconnected", (err) => {
  console.log(err, "disconnected");
});

mongoose.connection.on("connected", () => {
  console.log("connected");
});

app.get("/", (req, res) => {
  res.send("API is running");
});

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/pg", pgRoutes);
app.use("/api/rooms", roomRoutes);

app.use((err, req, res, next) => {
  const errStatus = err.status || 500;
  const errMsg = err.message || "Something went wrong";
  res
    .status(errStatus)
    .json({ message: errMsg, stack: err.stack, status: errStatus });
});

app.listen(8000, () => {
  dbConnect();
  console.log("backend server is running");
});
