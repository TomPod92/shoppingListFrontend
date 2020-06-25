import React, { useState } from 'react';
import './manageNavigation.scss';

export const ManageNavigation = (props) => {
  const [tabSelected, setTabSelected] = useState('products');

  const onInputChange = (event) => {
    setTabSelected(event.target.value);
    props.setTabOpen(event.target.value);
  }

  return (
    <div className="manageNavigation">

        <div className="submenu-item">
          <input className="submenu-item__input" type="checkbox" value="products" id="products" onChange={onInputChange} checked={tabSelected === 'products'}/>
          <label className="submenu-item__label"htmlFor="products">Produkty</label>
        </div>

        <div className="submenu-item">
          <input className="submenu-item__input" type="checkbox" value="sections" id="sections" onChange={onInputChange} checked={tabSelected === 'sections'}/>
          <label className="submenu-item__label"htmlFor="sections">Działy</label>
        </div>

        <div className="submenu-item">
          <input className="submenu-item__input" type="checkbox" value="shops" id="shops" onChange={onInputChange} checked={tabSelected === 'shops'}/>
          <label className="submenu-item__label"htmlFor="shops">Sklepy</label>
        </div>

    </div>
  )
};