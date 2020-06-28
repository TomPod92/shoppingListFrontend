import React from 'react';
import { useDispatch } from 'react-redux';
import { FaTrash, FaWrench } from 'react-icons/fa';
import { confirmAlert } from 'react-confirm-alert';

import { removeProduct, getSingleProduct } from '../../redux/actions/products.actions';

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

    const setProductToEdit = (product_id) => () => {
        dispatch(getSingleProduct(product_id))
    }

    return (
        <div className="manageItem productItem">
            <span>{props.product.name}</span>

            <div className="manageItem__actions">
                <div className="edit" onClick={setProductToEdit(props.product._id)}>
                {/* <div className="edit"> */}
                    <FaWrench />
                </div>
        
                <div className="remove" onClick={confirm}>
                    <FaTrash />
                </div>
            </div>
        </div>
    )
};