export const GET_USERPROFILE = "GET_USERPROFILE";
export const EDIT_USERNAME = "EDIT_USERNAME";

function userProfile(userData) {
    return {
        type: GET_USERPROFILE,
        payload: userData,
    } 
}

function updateUsername(username) {
    return {
        type: EDIT_USERNAME,
        payload: username,
    }
}

export { userProfile, updateUsername }