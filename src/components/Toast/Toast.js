import React from 'react';
import './toast.scss';

export const Toast = (props) => {
  return (
    <div className="my-toast">{props.info}</div>
  )
};