// allReducers
import { combineReducers } from "redux";
import socketReducer from "./socketReducer";
import mainReducer from "./mainReducer";

const allReducers = combineReducers({
   socketReducer: socketReducer,
   mainReducer: mainReducer,
});

// state.my has state for that reducer

export default allReducers;
