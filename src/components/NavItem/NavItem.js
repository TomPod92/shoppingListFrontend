import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaUserCircle, FaPlusCircle, FaShoppingCart } from "react-icons/fa";
import { MdStore } from 'react-icons/md'

import './navItem.scss';

export const NavItem = ({ current }) => {
    const icon = () => {
        if(current.icon === "FaUserCircle") return <FaUserCircle className="icon"/>
        else if(current.icon === "MdStore") return <MdStore className="icon"/>
        else if(current.icon === "FaShoppingCart") return <FaShoppingCart className="icon"/>
        else if(current.icon === "FaPlusCircle") return <FaPlusCircle className="icon"/>
    }
    return (
        <NavLink to={current.url} className="navItem">
            {icon()}
        </NavLink>
    );
}
