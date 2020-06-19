import React from 'react';
import { useDispatch } from 'react-redux' // test
import { useLocation } from 'react-router-dom';
import { FaPowerOff } from 'react-icons/fa';

import { logout } from '../../redux/actions/user.actions';

import './header.scss';

export const Header = (props) => {
  let location = useLocation().pathname.split('/')[1];
  const dispatch = useDispatch(); // test

  const title = () => {
    if(location === 'account') return "Ustawienia konta"
    else if(location === 'products') return "Produkty"
    else if(location === 'list') return "Lista zakupów"
    else if(location === 'manage') return "Zarządzaj"
    else if(location === '' || location === 'register' || location === 'login') return "Witaj!"
  }

  const handleLogout = () => dispatch(logout())

  return (
    <div className="header">
      <h1 className="header__title">{title()}</h1>
      <div className="header__icon" onClick={handleLogout}>
         <FaPowerOff/>
      </div>
    </div>
  )
};