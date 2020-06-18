import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa'

import './auth.scss';

export const Login = (props) => {
  const [ formData, setFormData ] = useState({
    email: '',
    password: ''
  });

  const handleInputChange = event => setFormData({...formData, [event.target.name]: event.target.value});

  const handleLoginUser = () => {
    console.log(formData);
  };


  return ( 
    <div className="page login">
      <div className="logo">
        <FaShoppingCart />
      </div>

      <form className="login__form" onSubmit={handleLoginUser}>
        <input type="text" name="email" className="input login__input" value={formData.email} placeholder="Email" onChange={handleInputChange}/>
        <input type="password" name="password" className="input login__input" value={formData.password} placeholder="Hasło" onChange={handleInputChange}/>
      </form>

      <button className="button button--primary loginButton">Zaloguj</button>

      <p className="login__info">Nie masz jeszcze konta?</p>
      <p className="login__info">Zarejestruj się!</p>

      <button className="button button--secondary registerButton">
        <Link to="/register">Register</Link>
      </button>
    </div>
  )
};