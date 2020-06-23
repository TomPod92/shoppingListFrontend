import { GET_ALL_SHOPS_SUCCESS, GET_ALL_SHOPS_FAIL, GET_ALL_SHOPS_REQUEST } from '../actions/types';

const defaultState = {
    shops: [],
    loading: true,
};

export const shopsReducer = (state = defaultState, action) => {
    switch(action.type) {
        case GET_ALL_SHOPS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case GET_ALL_SHOPS_SUCCESS:
            return {
                shops: action.shops,
                loading: false
            }
        case GET_ALL_SHOPS_FAIL:
            return defaultState
        default:
            return state;
    }
}