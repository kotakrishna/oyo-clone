import nc from "next-connect";
import dbConnect from "../../../config/dbConnect";

import {
  getSingleRoom,
  updateRoom,
  deleteRoom,
} from "../../../backEnd/controllers/roomControllers";
import onError from "../../../backEnd/middlewares/error";

dbConnect();
const roomHandle = nc({ onError });
roomHandle.get(getSingleRoom);
roomHandle.put(updateRoom);
roomHandle.delete(deleteRoom);

export default roomHandle;
