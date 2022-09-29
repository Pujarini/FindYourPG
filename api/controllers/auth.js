import User from "../models/Users.js";
import bcrypt from "bcrypt";
import { errorHandler } from "../utils/errors.js";
import jwt from "jsonwebtoken";

export const registerUser = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hash,
      isAdmin: req.body.isAdmin,
    });
    await newUser.save();
    res.status(201).json("User created successfully");
  } catch (error) {
    next(error);
  }
};

export const loginUser = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    // console.log(user.password, "password", user);
    if (!user) return next(errorHandler(404, "user not found"));

    const checkPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!checkPassword) return next(errorHandler(401, "invalid credentials"));
    const token = jwt.sign(
      {
        id: user._id,
        isAdmin: true,
      },
      process.env.JWT_TOKEN
    );
    const { password, isAdmin, ...otherDetails } = user._doc;
    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json({ ...otherDetails });
  } catch (error) {
    next(error);
  }
};
