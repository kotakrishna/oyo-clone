import { combineReducers } from "redux";

import { allRoomsReducer } from "./roomReducer";

const reducers = combineReducers({ allRooms: allRoomsReducer });

export default reducers;
