// Définition des types d'actions
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const LOGOUT = "LOGOUT";

function loginSuccess(token) {
    return {
        type: LOGIN_SUCCESS, // Type d'action
        payload: token, // Données associées à l'action
    }
}

function loginFail(error) {
    return {
        type: LOGIN_FAIL, // Type d'action
        payload: error, // Données associées à l'action
    }
}

function logout() {
    return {
        type: LOGOUT // Type d'action
    }
}

export { loginSuccess, loginFail, logout }