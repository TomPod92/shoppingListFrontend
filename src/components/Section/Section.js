import React, { useState, useEffect } from 'react';

import { SectionHeader } from '../../components/SectionHeader/SectionHeader';
import { ProductListItem } from '../../components/ProductListItem/ProductListItem';

import './section.scss';

export const Section = (props) => {

    // Jeżeli nie ma produktów w danym dziale nie wyświetlaj nic
    if(props.products.length === 0) {
        return null
    }

    return (
        <div className="section">
            <SectionHeader name={props.header}/>
            {props.products.map(current => <ProductListItem key={current._id} product={current}/>)}
        </div>
    )
};