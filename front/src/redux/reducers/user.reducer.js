import { LOGOUT } from "../actions/auth.action";
import { EDIT_USERNAME, GET_USERPROFILE } from "../actions/user.action";

const initialState = {
    status: "VOID",
    userData: {}
};

function userReducer(state = initialState, action) {
    switch (action.type) {
        case GET_USERPROFILE:
            return {
                ...state,
                status: "SUCCEEDED",
                userData: action.payload
            }
        case EDIT_USERNAME:
            return {
                ...state,
                status: "MODIFIED",
                userData: {
                    ...state.userData,
                    username: action.payload
                }
            }
        case LOGOUT: {
            return initialState;
        }
        default:
            return state;
    }
}
console.log(initialState)

export default userReducer