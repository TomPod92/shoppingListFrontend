import React from 'react';
import { GET_ALL_SECTIONS_SUCCESS, GET_ALL_SECTIONS_FAIL, GET_ALL_SECTIONS_REQUEST, CREATE_SECTION, REMOVE_SECTION } from '../actions/types';
import axios from 'axios';
import { toast } from 'react-toastify';

import { Toast } from '../../components/Toast/Toast';
// -------------------------------------------------------------------
export const getAllSections = () => async dispatch => {
    try {
        dispatch({ type: GET_ALL_SECTIONS_REQUEST });

        const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/sections`);
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
// -------------------------------------------------------------------
export const createSection = (sectionName) => async dispatch => {
    try {
        const body = JSON.stringify({name: sectionName});

        const config = {
            headers: { 'Content-Type': 'application/json' }
        };
    
        const res = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/sections`, body, config);

        if(res.status !== 400) {
            dispatch({
                type: CREATE_SECTION,
                section: res.data
            });
            
            toast.success(<Toast info="Dział dodano"/>);
        }
        
    } catch (error) {
        console.error(error.response);
        toast.error(<Toast info={error.response.data}/>);
    }
}
// -------------------------------------------------------------------
export const removeSection = (section_id) => async dispatch => {
    try {
        const res = await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/sections/${section_id}`);

        dispatch({
            type: REMOVE_SECTION,
            section_id: res.data._id
        });
        
        toast.error(<Toast info="Dział usunięto"/>);
    } catch (error) {
        console.error(error);
        toast.error(<Toast info="Coś poszło nie tak :("/>);
    }
}

