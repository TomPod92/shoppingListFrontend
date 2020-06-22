import { CREATE_USER_SUCCESS, CREATE_USER_FAIL, LOGIN_SUCCESS, LOGIN_FAIL, AUTOLOGIN_SUCCESS, AUTOLOGIN_FAIL, LOGOUT, GET_USER, UPDATE_USER, DELETE_USER } from '../actions/types';

const defaultState = {
    token: localStorage.getItem('shoppingListToken'),
    isAuth: false,
    loading: true,
    email: null
};

export const userReducer = (state = defaultState, action) => {
    switch(action.type) {
        case CREATE_USER_SUCCESS:
        case LOGIN_SUCCESS:
            localStorage.setItem('shoppingListToken', action.user.user.token);
            return {
                ...state,
                email: action.user.user.email,
                token: action.user.user.token,
                isAuth: true,
                loading: false
            }
        case AUTOLOGIN_SUCCESS:
            return {
                ...state,
                email: action.email,
                token: action.token,
                isAuth: true,
                loading: false
            }
        case CREATE_USER_FAIL:
        case LOGIN_FAIL:
        case AUTOLOGIN_FAIL:
        case LOGOUT:
            localStorage.removeItem('shoppingListToken');
            return {
                ...state,
                token: null,
                isAuth: false,
                loading: false
            }
        default:
            return state
    }
}