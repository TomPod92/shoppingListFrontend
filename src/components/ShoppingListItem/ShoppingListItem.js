import React from 'react';
import { useDispatch } from 'react-redux';

import { updateProduct } from '../../redux/actions/products.actions';

import './shoppingListItem.scss';

export const ShoppingListItem = ({ product }) => {
    const dispatch = useDispatch();

    const handleToggleBought = () => {
        dispatch(updateProduct(product._id, { bought: !product.bought }))
    }

    const itemClassName = () => {
        const modifier = product.bought ? 'bought' : 'toBuy';

        return `shoppingListItem shoppingListItem--${modifier}`
    }

    return (
        <div className={itemClassName()} onClick={handleToggleBought}>
            <span className="shoppingListItem__name">
                {`${product.name[0].toUpperCase()}${product.name.slice(1)}`}
            </span>
        </div>
    )
};