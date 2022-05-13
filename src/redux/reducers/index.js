import { combineReducers } from "redux";
import { fetchUserReducer } from "./userReducer";

export default combineReducers({
  users: fetchUserReducer,
});
