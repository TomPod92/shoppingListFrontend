import React from 'react';
import { GET_ALL_SHOPS_SUCCESS, GET_ALL_SHOPS_FAIL, GET_ALL_SHOPS_REQUEST, CREATE_SHOP, REMOVE_SHOP } from '../actions/types';
import axios from 'axios';
import { toast } from 'react-toastify';

import { Toast } from '../../components/Toast/Toast';

export const getAllShops = () => async dispatch => {
    try {
        dispatch({ type: GET_ALL_SHOPS_REQUEST });

        const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/shops`);
        dispatch({
            type: GET_ALL_SHOPS_SUCCESS,
            shops: res.data
        });
    } catch (error) {
        dispatch({ type: GET_ALL_SHOPS_FAIL });
        console.error(error.response)
        toast.error(<Toast info={error.response.data.error}/>);
    }
}
// -------------------------------------------------------------------
export const createShop = (shopName) => async dispatch => {
    try {
        const body = JSON.stringify({name: shopName});

        const config = {
            headers: { 'Content-Type': 'application/json' }
        };
    
        const res = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/shops`, body, config);

        dispatch({
            type: CREATE_SHOP,
            shop: res.data
        });
    } catch (error) {
        console.error(error.response);
        toast.error(<Toast info={error.response.data}/>);
    }
}
// -------------------------------------------------------------------
export const removeShop = (shop_id) => async dispatch => {
    try {
        const res = await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/shops/${shop_id}`);

        dispatch({
            type: REMOVE_SHOP,
            shop_id: res.data._id
        });
        
        toast.error(<Toast info="Sklep usunięto"/>);
    } catch (error) {
        console.error(error);
        toast.error(<Toast info="Coś poszło nie tak :("/>);
    }
}
