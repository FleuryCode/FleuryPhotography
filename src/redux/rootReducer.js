import { combineReducers } from "redux";
import languageReducer from "./language/language.reducer";

export default combineReducers({
    language: languageReducer
});