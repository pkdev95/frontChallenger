import { combineReducers } from "redux";
import { kartReducer } from "./kart/reducer";


 export const rootReducer = combineReducers({ kartReducer });