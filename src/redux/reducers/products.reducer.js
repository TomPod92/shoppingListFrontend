import { GET_ALL_PRODUCTS_SUCCESS, GET_ALL_PRODUCTS_FAIL } from '../actions/types';

const defaultState = {
    products: [],
    loading: true,
};

export const productsReducer = (state = defaultState, action) => {
    switch(action.type) {
        case GET_ALL_PRODUCTS_SUCCESS:
            return {
                products: action.products,
                loading: false
            }
        case GET_ALL_PRODUCTS_FAIL:
        default:
            return state;
    }
}