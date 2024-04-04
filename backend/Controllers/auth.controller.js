import User from "../Models/User.model.js";
import errorHandler from "../utils/errorHandler.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export const signUp = async (req, res, next) => {
  const { userName, passWord, email } = req.body;
  console.log(req.body)
  const hashPassWord = bcryptjs.hashSync(passWord, 10);
  if (
    !userName ||
    !passWord ||
    !email ||
    userName === "" ||
    passWord === "" ||
    email === ""
  ) {
    return res.status(404).json("All fields are required !");
  }

  try {
    const newUser = new User({
      userName,
      passWord: hashPassWord,
      email,
    });
    await newUser.save();
    const { passWord, ...rest } = newUser._doc;
    res.status(200).json(rest);
  } catch (err) {
    next(err);
  }
};

export const login = async (req, res, next) => {
  const { userName, passWord } = req.body;
  try {
    const user = await User.findOne({ userName });
    if (!user) return next(errorHandler(404, "user does not exist"));
    const ispassWordValid = bcryptjs.compareSync(passWord, user.passWord);
    const token = jwt.sign({ id: user._id }, process.env.JWT_TOKEN);
    if (!ispassWordValid)
      res.status(500).json({ message: "kindly log into your own account" });
     const { passWord:pass, ...rest } = user;
    res.cookie("token", token, { httpOnly: true }).status(201).json(rest);
  } catch (err) {
    next(err);
  }
};

