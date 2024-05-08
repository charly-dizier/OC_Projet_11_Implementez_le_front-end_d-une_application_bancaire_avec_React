import { combineReducers } from "redux";
import userReducer from "./user.reducer";
import authReducer from "./auth.reducer";

export default combineReducers ({
    // REDUCERS
    userReducer,
    auth: authReducer
});