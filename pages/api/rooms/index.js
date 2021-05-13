import nc from "next-connect";
import dbConnect from "../../../config/dbConnect";

import {
  allRooms,
  newRoom,
} from "../../../backEnd/controllers/roomControllers";

import onError from "../../../backEnd/middlewares/error";

dbConnect();
const roomHandle = nc({ onError });
roomHandle.get(allRooms);
roomHandle.post(newRoom);

module.exports = roomHandle;
