const Room = require("../model/room");
import ErrorHandler from "../../utils/errorHandler";
import catchAsyncErrors from "../middlewares/catchAsyncErrors";
import APIFeatures from "../../utils/apiFeatures";
const allRooms = catchAsyncErrors(async (req, res) => {
  const resPerPage = 4;
  const roomCount = await Room.countDocuments();
  // const rooms = await Room.find();
  const apiFeature = new APIFeatures(Room.find(), req.query).search().filter();

  let rooms = await apiFeature.query;
  let filteredRoomCount = rooms.length;
  apiFeature.pagination(resPerPage);

  rooms = await apiFeature.query;
  res.status(200).json({
    success: true,
    // count: rooms.length,
    roomCount,
    resPerPage,
    filteredRoomCount,
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
const getSingleRoom = catchAsyncErrors(async (req, res, next) => {
  const room = await Room.findById(req.query.id);
  if (!room) {
    return next(new ErrorHandler("Room not found with Id".anchor, 404));
  }
  res.status(200).json({
    success: true,
    data: room,
  });
});

// * update room details
const updateRoom = catchAsyncErrors(async (req, res, next) => {
  let room = await Room.findById(req.query.id);

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
});
const deleteRoom = catchAsyncErrors(async (req, res, next) => {
  let room = await Room.findById(req.query.id);

  // const updated = await room
  if (!room) {
    return next(new ErrorHandler("Room not found with Id", 404));
  }
  await room.remove();
  res.status(200).json({
    success: true,
    data: room,
  });
});
export { allRooms, newRoom, getSingleRoom, updateRoom, deleteRoom };
