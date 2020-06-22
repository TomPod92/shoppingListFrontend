import React from 'react'; // test
import { GET_ALL_PRODUCTS_SUCCESS, GET_ALL_PRODUCTS_FAIL } from '../actions/types';
import axios from 'axios';
import { toast } from 'react-toastify'; // test

import { Toast } from '../../components/Toast/Toast'; // test
// -------------------------------------------------------------------
export const getALLProducts = () => async dispatch => {
    try {
        const res = await axios.get('http://localhost:5000/products');

        dispatch({
            type: GET_ALL_PRODUCTS_SUCCESS,
            products: res.data
        });
    } catch (error) {
        dispatch({ type: GET_ALL_PRODUCTS_FAIL });
        console.error(error.response)
        toast.error(<Toast info={error.response.data}/>);
    }
}

