import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from "../actions/auth.action";

const initialState = {
    status: "VOID",
    isConnected: false,
    token: null,
    error: null
};

function authReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                status: "SUCCEEDED",
                isConnected: true,
                token: action.payload,
                error: null
            };
        case LOGIN_FAIL: {
            return {
                ...state,
                status: "FAILED",
                isConnected: false,
                error: action.payload
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