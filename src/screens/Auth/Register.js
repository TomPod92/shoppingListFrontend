import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa'

import './auth.scss';

export const Register = (props) => {
  const [ formData, setFormData ] = useState({
    email: '',
    password: '',
    password2: ''
  });

  const handleInputChange = event => setFormData({...formData, [event.target.name]: event.target.value});

  const handleRegisterUser = () => {
    console.log(formData);
  };

  return (
    <div className="page register">
        <div className="logo">
          <FaShoppingCart />
        </div>

      <form className="login__form" onSubmit={handleRegisterUser}>
        <input type="text" name="email" className="input login__input" value={formData.email} placeholder="Email" onChange={handleInputChange}/>
        <input type="password" name="password" className="input login__input" value={formData.password} placeholder="Hasło" onChange={handleInputChange}/>
        <input type="password" name="password2" className="input login__input" value={formData.password2} placeholder="Potwierdz hasło" onChange={handleInputChange}/>
      </form>

      <button className="button button--primary loginButton">Zarejestruj</button>

      <p className="login__info">Masz już konto</p>
      <p className="login__info">Zaloguj się!</p>

      <button className="button button--secondary registerButton">
        <Link to="/login">Logowanie</Link>
      </button>
    </div>
  )
};