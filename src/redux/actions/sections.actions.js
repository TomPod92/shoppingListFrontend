import React from 'react'; // test
import { GET_ALL_SECTIONS_SUCCESS, GET_ALL_SECTIONS_FAIL, GET_ALL_SECTIONS_REQUEST } from '../actions/types';
import axios from 'axios';
import { toast } from 'react-toastify'; // test

import { Toast } from '../../components/Toast/Toast'; // test
// -------------------------------------------------------------------
export const getALLSections = () => async dispatch => {
    try {
        dispatch({ type: GET_ALL_SECTIONS_REQUEST });

        const res = await axios.get('http://localhost:5000/sections');

        dispatch({
            type: GET_ALL_SECTIONS_SUCCESS,
            sections: res.data
        });
    } catch (error) {
        dispatch({ type: GET_ALL_SECTIONS_FAIL });
        console.error(error.response)
        toast.error(<Toast info={error.response.data.error}/>);
    }
}

