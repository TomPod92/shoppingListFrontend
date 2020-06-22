import React from 'react';
import { useDispatch } from 'react-redux';
import { FaCheckCircle, FaTimesCircle, FaWrench, FaTrash } from "react-icons/fa";

import { updateProduct } from '../../redux/actions/products.actions';

import './productListItem.scss';

export const ProductListItem = ({ product }) => {
    const dispatch = useDispatch();

    const handleToggleToBuy = () => {
        dispatch(updateProduct(product._id, { toBuy: !product.toBuy }))
    }

    const iconClassName = () => {
        const modifier = product.toBuy ? 'green' : 'red';

        return `productListItem__toBuy productListItem__toBuy--${modifier}`
    }

    return (
        <div className="productListItem" onClick={handleToggleToBuy}>
            <span className="productListItem__name">
                {`${product.name[0].toUpperCase()}${product.name.slice(1)}`}
            </span>

            <div className={iconClassName()}>
                {product.toBuy ? <FaCheckCircle/> : <FaTimesCircle />}
            </div>
        </div>
    )
};