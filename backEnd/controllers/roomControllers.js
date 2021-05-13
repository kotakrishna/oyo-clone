const Room = require("../model/room");
import ErrorHandler from "../../utils/errorHandler";
import catchAsyncErrors from "../middlewares/catchAsyncErrors";
const allRooms = catchAsyncErrors(async (req, res) => {
  const rooms = await Room.find();
  res.status(200).json({
    success: true,
    count: rooms.length,
    rooms,
  });
});
// * Create new Room = > //api/rooms

const newRoom = catchAsyncErrors(async (req, res, next) => {
  const room = await Room.create(req.body);

  res.status(200).json({
    success: true,
    data: room,
  });
});

// * get single room => /api/rooms/:id
const getSingleRoom = async (req, res, next) => {
  try {
    const room = await Room.findById(req.query.id);
    if (!room) {
      return next(new ErrorHandler("Room not found with Id".anchor, 404));
    }
    res.status(200).json({
      success: true,
      data: room,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

// * update room details
const updateRoom = async (req, res, next) => {
  let room = await Room.findById(req.query.id);
  try {
    // const updated = await room
    if (!room) {
      return next(new ErrorHandler("Room not found with Id", 404));
    }
    room = await Room.findByIdAndUpdate(req.query.id, req.body, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });
    res.status(200).json({
      success: true,
      data: room,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};
const deleteRoom = async (req, res, next) => {
  let room = await Room.findById(req.query.id);
  try {
    // const updated = await room
    if (!room) {
      return next(new ErrorHandler("Room not found with Id", 404));
    }
    await room.remove();
    res.status(200).json({
      success: true,
      data: room,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};
export { allRooms, newRoom, getSingleRoom, updateRoom, deleteRoom };