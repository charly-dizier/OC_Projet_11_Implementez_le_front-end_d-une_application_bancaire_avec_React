import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/auth.reducer";
import userReducer from "./reducers/user.reducer";

const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer
});

const store = configureStore ({
    reducer: rootReducer,
    devTools: true // Outil de dev "pour securité, une fois partie de dev terminer, passer sur false"
});

export default store