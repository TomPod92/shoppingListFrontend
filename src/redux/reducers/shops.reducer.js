import { GET_ALL_SHOPS_SUCCESS, GET_ALL_SHOPS_FAIL, GET_ALL_SHOPS_REQUEST, CREATE_SHOP, REMOVE_SHOP } from '../actions/types';

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
        case CREATE_SHOP:
            return {
                ...state,
                shops: [...state.shops, action.shop]
            }
        case REMOVE_SHOP:
            return {
                ...state,
                shops: state.shops.filter(current => current._id !== action.shop_id)
            }
        default:
            return state;
    }
}