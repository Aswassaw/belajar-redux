import { combineReducers } from "redux";
import breadReducer from "./breads/breadReducer";
import cakeReducer from "./cakes/cakeReducer";
import userReducer from "./users/userReducer";

export default combineReducers({
  breadReducer,
  cakeReducer,
  userReducer,
});
