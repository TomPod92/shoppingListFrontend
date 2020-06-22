import { GET_ALL_PRODUCTS_SUCCESS, GET_ALL_PRODUCTS_FAIL, GET_ALL_PRODUCTS_REQUEST, UPDATE_PRODUCT } from '../actions/types';

const defaultState = {
    products: [],
    loading: true,
};

export const productsReducer = (state = defaultState, action) => {
    switch(action.type) {
        case GET_ALL_PRODUCTS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case GET_ALL_PRODUCTS_SUCCESS:
            return {
                products: action.products,
                loading: false
            }
        case UPDATE_PRODUCT:
            return {
                ...state,
                products: state.products.map(current => {
                    if(current._id !== action.product._id) {
                        return current
                    } else {
                        return action.product
                    }
                })
            }
        case GET_ALL_PRODUCTS_FAIL:
            return defaultState
        default:
            return state;
    }
}