import React from 'react';
import { useDispatch } from 'react-redux';
import { FaTrash } from 'react-icons/fa';
import { confirmAlert } from 'react-confirm-alert';

import { removeShop } from '../../redux/actions/shops.actions';

import './manageItems.scss';

export const ShopItem = (props) => {
    const dispatch = useDispatch();

    const confirm = () => confirmAlert({  
        title: `Na pewno chcesz usunąc sklep: "${props.shop.name}"?`,   
        buttons: [
            {
                label: "Tak",
                onClick: () => dispatch(removeShop(props.shop._id))
            },
            {
                label: "Nie",
                onClick: () => {}
            }
        ]
      });

    return (
        <div className="manageItem shopItem">
            <span>{props.shop.name}</span>
            <div onClick={confirm}>
                <FaTrash />
            </div>
        </div>
    )
};