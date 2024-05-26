// Importation des actions
import { LOGOUT } from "../actions/auth.action";
import { EDIT_USERNAME, GET_USERPROFILE } from "../actions/user.action";

// Définission de l'état initial
const initialState = {
    status: "VOID",
    userData: {}
};

// Reducer user qui prend 2 argument: 
// 'State' représente l'état actuel 
// 'Action' représente l'action envoyé à partir des actions redux
function userReducer(state = initialState, action) {
    // Instruction switch pour baser le comportement du reducer sur le type d'action reçue
    switch (action.type) {
        case GET_USERPROFILE:
            return {
                ...state, // Copie immuable de l'état actuel 
                status: "SUCCEEDED",
                userData: action.payload // Mise à jour des données utilisateur reçues dans l'action
            }
        case EDIT_USERNAME:
            return {
                ...state, // Copie immuable de l'état actuel 
                status: "MODIFIED",
                userData: {
                    ...state.userData, // Copie immuable de l'état actuel 
                    username: action.payload // Mise à jour du nom d'utilisateurr reçue dans l'action
                }
            }
        case LOGOUT: {
            return initialState;
        }
        default:
            return state;
    }
}

export default userReducer