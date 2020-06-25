import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getAllShops } from '../../redux/actions/shops.actions';

import './manageForms.scss';

export const ShopForm = (props) => {
  const dispatch = useDispatch();
  const shops = useSelector(state => state.shops.shops);
  const [ shopName, setShopName ] = useState('');
  const [ allShopsPanelVisible, setAllShopsPanelVisible ] = useState(false);

  useEffect(() => {
    dispatch(getAllShops());
  }, [dispatch])

  return (
    <div className="manageForm shopForm">
      <input 
        className="manageForm__input" 
        type="text" 
        placeholder="Nazwa sklepu" 
        value={shopName}
        onChange={(event) => setShopName(event.target.value)}
      />

      <button className="manageForm__button">Dodaj</button>

      <div className="manageForm__panelButton" >
        <button onClick={() => setAllShopsPanelVisible(prevState => !prevState)}>
          { allShopsPanelVisible ? "Zwiń" : "Pokaż" } listę sklepów
        </button>
      </div>
    </div>
  )
};