import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/auth.reducer";
import userReducer from "./reducers/user.reducer";

// Combinaison des reducers en un seul rediucer racine
const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer
});

// Configuration du store Redux
const store = configureStore ({
    reducer: rootReducer,
    devTools: true // Activation des Redux DevTools pour le développement
    // Note : Pour des raisons de sécurité, désactivez cette option en production
});

export default store