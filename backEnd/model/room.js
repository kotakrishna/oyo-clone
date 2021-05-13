const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter room name"],
    trim: true,
    maxLength: [100, "Room name can not exceed 100 characters"],
  },
  pricePerNight: {
    type: Number,
    required: [true, "Please enter room price per night"],
    maxLength: [4, "Room price cannot exceed 9999/-"],
  },
  description: {
    type: String,
    required: [true, "Please enter description"],
  },
  address: {
    type: String,
    required: [true, "Please enter address"],
  },
  guestCapacity: {
    type: Number,
    required: [true, "Please enter room capacity"],
  },
  numOfBeds: {
    type: Number,
    required: [true, "Please enter Number of beds"],
  },
  internet: {
    type: Boolean,
    default: false,
  },
  breakfast: {
    type: Boolean,
    default: false,
  },
  airConditioned: {
    type: Boolean,
    default: false,
  },
  petsAllowed: {
    type: Boolean,
    default: false,
  },
  roomCleaning: {
    type: Boolean,
    default: false,
  },
  rating: {
    type: Number,
    default: 0,
  },
  numOfReviews: {
    type: Number,
    default: 0,
  },
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  category: {
    type: String,
    required: [true, "Please enter room category"],
    enum: {
      values: ["King", "Single", "Twins"],
      message: "Please Select correct category for room",
    },
  },
  reviews: [
    {
      user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
    },
  ],
  owner: {
    type: mongoose.Schema.ObjectId,
    ref: "Owner",
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.models.Room || mongoose.model("Room", roomSchema);
