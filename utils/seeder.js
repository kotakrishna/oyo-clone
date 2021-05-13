// import mongoose from "mongoose";
const Room = require("../backEnd/model/room");
const rooms = require("../backEnd/data/room");

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/oyo-clone", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

const seedRoom = async () => {
  try {
    await Room.deleteMany();
    console.log("delete all rooms");
    await Room.insertMany(rooms);
    console.log("all rooms added");
    process.exit();
  } catch (error) {
    console.log(error.message);
    process.exit();
  }
};

seedRoom();
