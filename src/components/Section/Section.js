import React from 'react';
import { useSelector } from 'react-redux';

import { SectionHeader } from '../../components/SectionHeader/SectionHeader';
import { ProductListItem } from '../../components/ProductListItem/ProductListItem';
import { ShoppingListItem } from '../../components/ShoppingListItem/ShoppingListItem';

import './section.scss';

export const Section = (props) => {
    const products = useSelector(state => state.products.products.filter(current => current.section === props.header));

    // Jeżeli nie ma produktów w danym dziale nie wyświetlaj nic
    if(products.length === 0) {
        return null
    }

    return (
        <div className="section">
            <SectionHeader name={props.header}/>
            {props.type === "products" && products.map(current => <ProductListItem key={current._id} product={current}/>)}
            {props.type === "list" && products.map(current => <ShoppingListItem key={current._id} product={current}/>)}
        </div>
    )
};