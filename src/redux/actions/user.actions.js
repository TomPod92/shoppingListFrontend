import React from 'react'; // test
import { CREATE_USER_SUCCESS, CREATE_USER_FAIL, LOGIN_SUCCESS, LOGIN_FAIL, AUTOLOGIN_SUCCESS, AUTOLOGIN_FAIL,  LOGOUT, GET_USER, UPDATE_USER, DELETE_USER } from '../actions/types';
import axios from 'axios';
import { toast } from 'react-toastify'; // test

import { setAuthToken } from '../../helpers/setAuthToken';
import { Toast } from '../../components/Toast/Toast'; // test
// -------------------------------------------------------------------
export const createUser = ({ email, password }) => async dispatch => {
    const config = {
        headers: { 'Content-Type': 'application/json' }
    };

    const body = JSON.stringify({email, password});

    try {
        const res = await axios.post('http://localhost:5000/users', body, config);

        dispatch({
            type: CREATE_USER_SUCCESS,
            user: res.data
        });
    } catch (error) {
        dispatch({ type: CREATE_USER_FAIL });
        console.error(error.response)
        toast.error(<Toast info={error.response.data}/>);
    }
};
// -------------------------------------------------------------------
export const login = ({ email, password }) => async dispatch => {
    const config = {
        headers: { 'Content-Type': 'application/json' }
    };

    const body = JSON.stringify({email, password});

    try {
        const res = await axios.post('http://localhost:5000/users/login', body, config);
        
        setAuthToken(res.data.user.token);

        dispatch({
            type: LOGIN_SUCCESS,
            user: res.data
        });
    } catch (error) {
        dispatch({ type: LOGIN_FAIL });
        console.error(error.response)
        toast.error(<Toast info={error.response.data} />);
    }
}
// -------------------------------------------------------------------
export const autoLogin = () => async dispatch => {
    // Jeżeli w localStorage znajduje sie już token dodaj go do header'a wszystkich zapytań
    if(localStorage.getItem('shoppingListToken')) {
        setAuthToken(localStorage.getItem('shoppingListToken'));
    }

    try {
        const res = await axios.get('http://localhost:5000/users/me');
        dispatch({ 
            type: AUTOLOGIN_SUCCESS,
            user: res.data
        });
    } catch (error) {
        dispatch({ type: AUTOLOGIN_FAIL });
        console.error(error.response)
        // toast.error(<Toast info={error.response.data} />);
    }
}
// -------------------------------------------------------------------
export const logout = () => dispatch => {
    dispatch({ type: LOGOUT });
};