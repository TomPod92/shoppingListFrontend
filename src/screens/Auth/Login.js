import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa'
import { toast } from 'react-toastify';

import { login } from '../../redux/actions/user.actions';
import { Toast } from '../../components/Toast/Toast';

import 'react-toastify/dist/ReactToastify.css';

import './auth.scss';

export const Login = (props) => {
  const [ formData, setFormData ] = useState({
    email: '',
    password: ''
  });
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.user.isAuth);
// -------------------------------------------------------------------
  const handleInputChange = event => setFormData({...formData, [event.target.name]: event.target.value});
// -------------------------------------------------------------------
  const handleLoginUser = (event) => {
    event.preventDefault();

    if(validateForm()) {
      dispatch(login({
        email: formData.email,
        password: formData.password
      }))
    }
  };
// -------------------------------------------------------------------
  const validateForm = () => {
    let valid = true;

    if(!formData.email.trim()) {
      toast.error(<Toast info="Podaj adres email"/>);
      valid = false;
    }
    if(!formData.password.trim()) {
      toast.error(<Toast info="Podaj hasło"/>);
      valid = false;
    }

    return valid;
  }
// -------------------------------------------------------------------
  if(isAuthenticated) {
    return <Redirect to="/products" />
  }
  
  return ( 
    <div className="page login">
      <div className="logo">
        <FaShoppingCart />
      </div>

      <form className="login__form" onSubmit={handleLoginUser}>
        <input type="text" name="email" className="login__input" value={formData.email} placeholder="Email" onChange={handleInputChange}/>
        <input type="password" name="password" className="login__input" value={formData.password} placeholder="Hasło" onChange={handleInputChange}/>
        <button className="submitButton" type="submit">Zaloguj</button>
      </form>

      <p className="login__info">Nie masz jeszcze konta?</p>
      <p className="login__info">Zarejestruj się!</p>

      <button className="otherButton">
        <Link to="/register">Rejestracja</Link>
      </button>
    </div>
  )
};