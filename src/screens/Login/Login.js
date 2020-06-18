import React from 'react';
import { Link } from 'react-router-dom';

import './login.scss';

export const Login = (props) => {
  return (
    <div className="page login">
      Login
      <Link to="/register">Register</Link>
    </div>
  )
};