// Définition des types d'actions
export const GET_USERPROFILE = "GET_USERPROFILE";
export const EDIT_USERNAME = "EDIT_USERNAME";

function userProfile(userData) {
    return {
        type: GET_USERPROFILE, // Type d'action
        payload: userData, // Données associées à l'action
    } 
}

function updateUsername(username) {
    return {
        type: EDIT_USERNAME, // Type d'action
        payload: username, // Données associées à l'action
    }
}

export { userProfile, updateUsername }