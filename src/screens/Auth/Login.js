import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa'
import { ToastContainer, toast } from 'react-toastify';

import { Toast } from '../../components/Toast/Toast';

import 'react-toastify/dist/ReactToastify.css';

import './auth.scss';

export const Login = (props) => {
  const [ formData, setFormData ] = useState({
    email: '',
    password: ''
  });

  const handleInputChange = event => setFormData({...formData, [event.target.name]: event.target.value});

  const handleLoginUser = (event) => {
    event.preventDefault();

    if(!formData.email.trim()) toast.error(<Toast info="Podaj adres email"/>);
    if(!formData.password.trim()) toast.error(<Toast info="Podaj hasło"/>);
  };

  return ( 
    <div className="page login">
      <div className="logo">
        <FaShoppingCart />
      </div>

      <form className="login__form" onSubmit={handleLoginUser}>
        <input type="text" name="email" className="input login__input" value={formData.email} placeholder="Email" onChange={handleInputChange}/>
        <input type="password" name="password" className="input login__input" value={formData.password} placeholder="Hasło" onChange={handleInputChange}/>
        <button className="button button--primary submitButton" type="submit">Zaloguj</button>
      </form>

      <p className="login__info">Nie masz jeszcze konta?</p>
      <p className="login__info">Zarejestruj się!</p>

      <button className="button button--secondary otherButton">
        <Link to="/register">Rejestracja</Link>
      </button>

      <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnVisibilityChange
          draggable
          pauseOnHover
      ></ToastContainer>
    </div>
  )
};