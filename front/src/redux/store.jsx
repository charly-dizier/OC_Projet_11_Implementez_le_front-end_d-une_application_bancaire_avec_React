import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../redux/reducers";

const store = configureStore ({
    reducer: rootReducer,
    devTools: true // Outil de dev "pour securité, une fois partie de dev terminer, passer sur false"
});

export default store