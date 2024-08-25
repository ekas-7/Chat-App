const User = require("../models/User");
const mongoose=require("mongoose");

const hello = (req, res) => {
  res.status(200).json({ msg: "hello" });
};

const addUser = async (req, res) => {
  try {
    const { sub } = req.body;

    if (!sub) {
      return res.status(400).json({ msg: "Missing required field: sub" });
    }

    let exist = await User.findOne({ sub: sub });
    if (exist) {
      return res.status(200).json({ msg: "User already exists" });
    } else {
      const newUser = new User(req.body);
      await newUser.save();
      return res.status(201).json({ user: newUser });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error", details: error.message });
  }
};

const getUsers = async (req,res) =>{
  try {
    const users = await User.find({});
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json(error);
  }
};


module.exports = {
  hello,
  addUser,
  getUsers
};
