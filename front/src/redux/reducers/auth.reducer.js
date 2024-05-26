// Importation des actions
import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from "../actions/auth.action";

// Définission de l'état initial
const initialState = {
    status: "VOID",
    isConnected: false,
    token: null,
    error: null
};

// Reducer d'authentification qui prend 2 argument: 
// 'State' représente l'état actuel 
// 'Action' représente l'action envoyé à partir des actions redux 
function authReducer(state = initialState, action) {
    // Instruction switch pour baser le comportement du reducer sur le type d'action reçue
    switch (action.type) {
        case LOGIN_SUCCESS: {
            return {
                ...state, // Copie immuable de l'état actuel 
                status: "SUCCEEDED",
                isConnected: true,
                token: action.payload, // Mise à jour du token reçu dans l'action 
                error: null
            }
        }
        case LOGIN_FAIL: {
            return {
                ...state, // Copie immuable de l'état actuel 
                status: "FAILED",
                isConnected: false,
                error: action.payload // Mise à jour du message d'erreur reçu dans l'action
            }
        }
        case LOGOUT: {
            return initialState;
        }
        default:
            return state;
    }
}

export default authReducer