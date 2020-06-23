import React from 'react';
import { GET_ALL_SHOPS_SUCCESS, GET_ALL_SHOPS_FAIL, GET_ALL_SHOPS_REQUEST } from '../actions/types';
import axios from 'axios';
import { toast } from 'react-toastify';

import { Toast } from '../../components/Toast/Toast';

export const getAllShops = () => async dispatch => {
    try {
        dispatch({ type: GET_ALL_SHOPS_REQUEST });

        const res = await axios.get('http://localhost:5000/shops');
        dispatch({
            type: GET_ALL_SHOPS_SUCCESS,
            shops: res.data
        });
    } catch (error) {
        dispatch({ type: GET_ALL_SHOPS_FAIL });
        console.error(error.response)
        // toast.error(<Toast info={error.response.data.error}/>);
    }
}