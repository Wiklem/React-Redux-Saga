import { combineReducers } from "redux";
import fetchData from "./fetchReducer";

const rootReducer = combineReducers({
  fetchData
});

export default rootReducer;
