import { combineReducers } from "redux";
import fecthReducer from "./fetchReducer";
import titleReducer from "./titleReducer";

const rootReducer = combineReducers({
  fetch: fecthReducer,
  titles: titleReducer
});

export default rootReducer;
