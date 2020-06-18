import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';

import { Toast } from '../../components/Toast/Toast';

import './auth.scss';

export const Register = (props) => {
  const [ formData, setFormData ] = useState({
    email: '',
    password: '',
    password2: ''
  });

  const handleInputChange = event => setFormData({...formData, [event.target.name]: event.target.value});

  const handleRegisterUser = (event) => {
    event.preventDefault();

    if(!formData.email.trim()) toast.error(<Toast info="Podaj adres email"/>);
    if(!formData.password.trim()) {
      toast.error(<Toast info="Podaj hasło"/>);
    }
    else {
      if(formData.password2.trim() && (formData.password.trim() !== formData.password2.trim() )) toast.error(<Toast info="Hasła się różnią"/>);
    }
    if(!formData.password2.trim()) toast.error(<Toast info="Potwierdz hasło"/>);
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
        <button className="button button--primary submitButton" type="submit">Zarejestruj</button>
      </form>

      <p className="login__info">Masz już konto</p>
      <p className="login__info">Zaloguj się!</p>

      <button className="button button--secondary otherButton">
        <Link to="/login">Logowanie</Link>
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