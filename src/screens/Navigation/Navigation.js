import React from 'react';

import { NavItem } from '../../components/NavItem/NavItem';
import { config } from '../../config';

import './navigation.scss';

export const Navigation = (props) => {
  return (
    <div className="navigation">
        {config.navItems.map(current => <NavItem key={current.url} current={current} />)}
    </div>
  )
};