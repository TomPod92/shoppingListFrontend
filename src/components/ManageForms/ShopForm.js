import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import { Toast } from '../../components/Toast/Toast';
import { ManageList } from '../ManageList/ManageList';
import { getAllShops, createShop } from '../../redux/actions/shops.actions';

import './manageForms.scss';

export const ShopForm = (props) => {
  const dispatch = useDispatch();
  const shops = useSelector(state => state.shops.shops);
  const [ shopName, setShopName ] = useState('');
  const [ allShopsPanelVisible, setAllShopsPanelVisible ] = useState(false);

  useEffect(() => {
    dispatch(getAllShops());
  }, [dispatch]);

  const handleCreateShop = () => {
    if(!shopName.trim()) {
      toast.error(<Toast info="Podaj nazwę nowego sklepu"/>);
      return;
    } else {
      dispatch(createShop(shopName));
      toast.success(<Toast info="Sklep dodano"/>);
      setShopName('');
    }
  }

  return (
    <div className="manageForm shopForm">
      <input 
        className="manageForm__input" 
        type="text" 
        placeholder="Nazwa sklepu" 
        value={shopName}
        onChange={(event) => setShopName(event.target.value)}
      />

      <button className="manageForm__button--add" onClick={handleCreateShop}>Dodaj</button>

      <div className="manageForm__panelButton" >
        <button onClick={() => setAllShopsPanelVisible(prevState => !prevState)}>
          { allShopsPanelVisible ? "Zwiń" : "Pokaż" } listę sklepów
        </button>
      </div>

      { allShopsPanelVisible && <ManageList items={shops} type="shops"/> }
    </div>
  )
};