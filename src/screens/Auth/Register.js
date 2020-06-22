import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { toast } from 'react-toastify';

import { Toast } from '../../components/Toast/Toast';
import { createUser } from '../../redux/actions/user.actions';

import './auth.scss';

export const Register = (props) => {
  const [ formData, setFormData ] = useState({
    email: '',
    password: '',
    password2: ''
  });

  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.user.isAuth);
// -------------------------------------------------------------------
  const handleInputChange = event => setFormData({...formData, [event.target.name]: event.target.value});
// -------------------------------------------------------------------
  const handleRegisterUser = async (event) => {
    event.preventDefault();

    if(validateForm()) {
      dispatch(createUser({
        email: formData.email,
        password: formData.password
      }));
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
    else if(formData.password.trim() && formData.password.trim().length <= 6) {
      toast.error(<Toast info="Hasło powinno zawierac przynajmnniej 7 znaków"/>);
      valid = false;
    }
    else {
      if(formData.password2.trim() && (formData.password.trim() !== formData.password2.trim() )) {
        toast.error(<Toast info="Hasła się różnią"/>);
        valid = false;
      }
    }
    if(!formData.password2.trim()) {
      toast.error(<Toast info="Potwierdz hasło"/>);
      valid = false;
    }

    return valid;
  }
// -------------------------------------------------------------------
  if(isAuthenticated) {
    return <Redirect to="/products" />
  }

  return (
    <div className="page register">
        <div className="logo">
          <FaShoppingCart />
        </div>

      <form className="login__form" onSubmit={handleRegisterUser}>
        <input type="text" name="email" className="login__input" value={formData.email} placeholder="Email" onChange={handleInputChange}/>
        <input type="password" name="password" className="login__input" value={formData.password} placeholder="Hasło" onChange={handleInputChange}/>
        <input type="password" name="password2" className="login__input" value={formData.password2} placeholder="Potwierdz hasło" onChange={handleInputChange}/>
        <button className="button button--primary submitButton" type="submit">Zarejestruj</button>
      </form>

      <p className="login__info">Masz już konto</p>
      <p className="login__info">Zaloguj się!</p>

      <button className="button button--secondary otherButton">
        <Link to="/login">Logowanie</Link>
      </button>
    </div>
  )
};