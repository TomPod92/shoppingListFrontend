import React from 'react';
import { GET_ALL_PRODUCTS_SUCCESS, GET_ALL_PRODUCTS_FAIL, GET_ALL_PRODUCTS_REQUEST, UPDATE_PRODUCT } from '../actions/types';
import axios from 'axios';
import { toast } from 'react-toastify';

import { Toast } from '../../components/Toast/Toast';
// -------------------------------------------------------------------
export const getAllProducts = () => async dispatch => {
    try {
        dispatch({ type: GET_ALL_PRODUCTS_REQUEST });

        const res = await axios.get('http://localhost:5000/products');

        dispatch({
            type: GET_ALL_PRODUCTS_SUCCESS,
            products: res.data
        });
    } catch (error) {
        dispatch({ type: GET_ALL_PRODUCTS_FAIL });
        console.error(error.response)
        toast.error(<Toast info={error.response.data.error}/>);
    }
};
// -------------------------------------------------------------------
export const updateProduct = (id, updates) => async dispatch => {
    try {
        const config = {
            headers: { 'Content-Type': 'application/json' }
        };
    
        const body = JSON.stringify({...updates});

        const res = await axios.patch(`http://localhost:5000/products/${id}`, body, config);

        if(res.status === 200) {
            // inny sposób --> pobierze wszystkie produkty po update'owaniu jedngo w bazie danych
            // dispatch(getALLProducts());
            dispatch({
                type: UPDATE_PRODUCT,
                product: res.data
            });
        }
    } catch (error) {
        toast.error(<Toast info={"Nie udało się dodać produktu do listy zakupów"}/>);
    }
}

