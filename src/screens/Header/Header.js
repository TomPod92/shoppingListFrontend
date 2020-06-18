import React from 'react';
import { useLocation } from 'react-router-dom';
import { FaPowerOff } from 'react-icons/fa';

import './header.scss';

export const Header = (props) => {
  let location = useLocation().pathname.split('/')[1];

  const title = () => {
    if(location === 'account') return "Ustawienia konta"
    else if(location === 'products') return "Produkty"
    else if(location === 'list') return "Lista zakupów"
    else if(location === 'manage') return "Zarządzaj"
    else if(location === '' || location === 'register' || location === 'login') return "Witaj!"
  }

  return (
    <div className="header">
      <h1 className="header__title">{title()}</h1>
      <div className="header__icon">
         <FaPowerOff/>
      </div>
    </div>
  )
};