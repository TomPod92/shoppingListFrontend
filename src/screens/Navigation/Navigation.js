import React from 'react';
import { useSelector } from 'react-redux' // test

import { NavItem } from '../../components/NavItem/NavItem';
import { config } from '../../config';

import './navigation.scss';

export const Navigation = (props) => {
  const isAuthenticated = useSelector(state => state.user.isAuth);
  if(!isAuthenticated) {
    return null
  }
  
  return (
    <div className="navigation">
        {config.navItems.map(current => <NavItem key={current.url} current={current} />)}
    </div>
  )
};