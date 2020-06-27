import React from 'react';
import { useDispatch } from 'react-redux';
import { FaTrash } from 'react-icons/fa';
import { confirmAlert } from 'react-confirm-alert';

import { removeProduct } from '../../redux/actions/products.actions';

import './manageItems.scss';

export const ProductItem = (props) => {
    const dispatch = useDispatch();

    const confirm = () => confirmAlert({  
        title: `Na pewno chcesz usunąc produkt "${props.product.name}"?`,   
        buttons: [
            {
                label: "Tak",
                onClick: () => dispatch(removeProduct(props.product._id))
            },
            {
                label: "Nie",
                onClick: () => {}
            }
        ]
      });

    return (
        <div className="manageItem productItem">
            <span>{props.product.name}</span>
            <div onClick={confirm}>
                <FaTrash />
            </div>
        </div>
    )
};