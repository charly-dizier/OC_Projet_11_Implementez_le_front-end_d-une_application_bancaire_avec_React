export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const LOGOUT = "LOGOUT";

function loginSuccess(token) {
    return {
        type: LOGIN_SUCCESS,
        payload: token,
    }
}

function loginFail(error) {
    return {
        type: LOGIN_FAIL,
        payload: error
    }
}

function logout() {
    return {
        type: LOGOUT
    }
}

export { loginSuccess, loginFail, logout }