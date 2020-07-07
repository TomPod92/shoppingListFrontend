import React from 'react';

import { SectionItem } from '../ManageItems/SectionItem';
import { ShopItem } from '../ManageItems/ShopItem';
import { ProductItem } from '../ManageItems/ProductItem';

import './manageList.scss';

export const ManageList = (props) => {

    const renderItemList = () => {
        if(!props.items.length) {
            return <p className="manageList__info">Nie dodałeś jeszcze nic do listy</p>
        }
        else if(props.type === 'sections') {
            return props.items.map(current => <SectionItem key={current._id} section={current}/>)
        } else if(props.type === 'shops') {
            return props.items.map(current => <ShopItem key={current._id} shop={current}/>)
        } else if(props.type === 'products') {
            return props.items.map(current => <ProductItem key={current._id} product={current}/>)
        }
    }

    return (
        <ul className="manageList">
            {renderItemList()}
        </ul>
    )
};