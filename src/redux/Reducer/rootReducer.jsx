import { combineReducers } from "redux";
import DatVeReducer from "./DatVeReducer";

const rootReducer = combineReducers({
  datVe: DatVeReducer,
});

export default rootReducer;
