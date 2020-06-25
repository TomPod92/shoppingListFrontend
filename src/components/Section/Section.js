import React from 'react';

import { SectionHeader } from '../../components/SectionHeader/SectionHeader';
import { ProductListItem } from '../../components/ProductListItem/ProductListItem';
import { ShoppingListItem } from '../../components/ShoppingListItem/ShoppingListItem';

import './section.scss';

export const Section = (props) => {

    // Jeżeli nie ma produktów w danym dziale nie wyświetlaj nic
    if(props.products.length === 0) {
        return null
    }

    return (
        <div className="section">
            <SectionHeader name={props.header}/>
            {props.type === "products" && props.products.map(current => <ProductListItem key={current._id} product={current}/>)}
            {props.type === "list" && props.products.map(current => <ShoppingListItem key={current._id} product={current}/>)}
        </div>
    )
};