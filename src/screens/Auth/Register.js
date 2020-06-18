import React from 'react';
import { Link } from 'react-router-dom';

import './auth.scss';

export const Register = (props) => {
  return (
    <div className="page register">
        Register
        <Link to="/login">Login</Link>
    </div>
  )
};