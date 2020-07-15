import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { FaPowerOff } from 'react-icons/fa';
import { confirmAlert } from 'react-confirm-alert'; // test

import { logout } from '../../redux/actions/user.actions';

import './header.scss';

export const Header = (props) => {
  let location = useLocation().pathname.split('/')[1];
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.user.isAuth);

  const title = () => {
    if(location === 'account') return "Ustawienia konta"
    else if(location === 'products') return "Produkty"
    else if(location === 'list') return "Lista zakupów"
    else if(location === 'manage') return "Zarządzaj"
    else if(location === '' || location === 'register' || location === 'login') return "Witaj!"
  }

  const handleLogout = () => dispatch(logout());

  const confirm = () => () => confirmAlert({  
    title: "Na pewno chcesz usunąc się wylogować?",   
    buttons: [
        {
            label: "Tak",
            onClick: () => handleLogout()
        },
        {
            label: "Nie",
            onClick: () => {}
        }
    ]
  });

  return (
    <div className="header">
      <h1 className="header__title">{title()}</h1>
      {isAuthenticated && (
        <div className="header__icon" onClick={confirm()}>
          <FaPowerOff/>
        </div>
      )}
      
    </div>
  )
};