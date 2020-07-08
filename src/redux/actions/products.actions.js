import React from 'react';
import { GET_ALL_PRODUCTS_SUCCESS, GET_ALL_PRODUCTS_FAIL, GET_ALL_PRODUCTS_REQUEST, GET_SINGLE_PRODUCT, CREATE_PRODUCT, REMOVE_PRODUCT, UPDATE_PRODUCT } from '../actions/types';
import axios from 'axios';
import { toast } from 'react-toastify';

import { Toast } from '../../components/Toast/Toast';
// -------------------------------------------------------------------
export const getAllProducts = () => async dispatch => {
    try {
        dispatch({ type: GET_ALL_PRODUCTS_REQUEST });

        const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/products`);

        dispatch({
            type: GET_ALL_PRODUCTS_SUCCESS,
            products: res.data
        });
    } catch (error) {
        dispatch({ type: GET_ALL_PRODUCTS_FAIL });
        console.error(error.response)
        toast.error(<Toast info="Coś poszło nie tak :(" />);
    }
};
// -------------------------------------------------------------------
export const getSingleProduct = products_id=> async dispatch => {
    try {
        const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/products/${products_id}`);

        dispatch({
            type: GET_SINGLE_PRODUCT,
            product: res.data
        })
    } catch (error) {
        console.error(error.response)
        toast.error(<Toast info="Coś poszło nie tak :(" />);
    }
}
// -------------------------------------------------------------------
export const createProduct = (newProduct) => async dispatch => {
    try {
        const body = JSON.stringify({...newProduct});

        const config = {
            headers: { 'Content-Type': 'application/json' }
        };

        const res = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/products`, body, config);

        if(res.status !== 400) {
            dispatch({
                type: CREATE_PRODUCT,
                newProduct: res.data
            });

            toast.success(<Toast info="Produkt dodano"/>);
        }
        
    
    } catch (error) {
        console.error(error.response)
        toast.error(<Toast info={error.response.data.error}/>);
    }
}
// -------------------------------------------------------------------
export const removeProduct = product_id => async dispatch => {
    try {
        const res = await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/products/${product_id}`);

        dispatch({
            type: REMOVE_PRODUCT,
            product_id: res.data._id
        })
    } catch (error) {
        console.error(error.response);
        toast.error(<Toast info="Coś poszło nie tak :("/>);
    }
}
// -------------------------------------------------------------------
export const updateProduct = (id, updates) => async dispatch => {
    try {
        const config = {
            headers: { 'Content-Type': 'application/json' }
        };
    
        const body = JSON.stringify({...updates});

        const res = await axios.patch(`${process.env.REACT_APP_BACKEND_URL}/products/${id}`, body, config);
        
        if(res.status === 200) {
            // inny sposób --> pobierze wszystkie produkty po update'owaniu jedngo w bazie danych
            // dispatch(getALLProducts());
            dispatch({
                type: UPDATE_PRODUCT,
                product: res.data
            });

            // Jeżeli aktualizowaliśmy produkt, wyświetl tosta
            // Jeżeli tylko zmienialismy wartość "toBuy" lub "bought" nie wyświetlaj
            if(updates.hasOwnProperty('toBuy') | updates.hasOwnProperty('bought')) {
                return
            }
            toast.success(<Toast info="Produkt zaktualizowano"/>);
        }
    } catch (error) {
        toast.error(<Toast info={"Nie udało się dodać produktu do listy zakupów"}/>);
    }
}

