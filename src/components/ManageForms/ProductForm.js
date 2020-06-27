import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import { Toast } from '../../components/Toast/Toast';
import { ManageList } from '../ManageList/ManageList';
import { getAllSections } from '../../redux/actions/sections.actions';
import { getAllShops } from '../../redux/actions/shops.actions';
import { getAllProducts, updateProduct } from '../../redux/actions/products.actions';

import './manageForms.scss';

export const ProductForm = (props) => {
  const dispatch = useDispatch();
  const sections = useSelector(state => state.sections.sections);
  const shops = useSelector(state => state.shops.shops);
  const products = useSelector(state => state.products.products);

  const [ newProduct, setNewProduct ] = useState({
    name: '',
    section: '',
    shops: []
  });

  const [ allProductsPanelVisible, setAllProductsPanelVisible ] = useState(false);

  useEffect(() => {
    dispatch(getAllSections());
    dispatch(getAllShops());
    dispatch(getAllProducts());
  }, [dispatch]);

  const handleCreateProduct = () => {
    if(!newProduct.name.trim()) {
      toast.error(<Toast info="Podaj nazwę nowego produktu"/>);
      return;
    } else {
      // dispatch(createSection(sectionName));
      toast.success(<Toast info="Produkt dodano"/>);
      setNewProduct({
        name: '',
        section: '',
        shops: []
      });
    }
  }

  return (
    <div className="manageForm productForm">
        <input 
          className="manageForm__input"
          type="text"
          placeholder="Nazwa produktu"
          value={newProduct.name}
          onChange={(event) => setNewProduct({...newProduct, name: event.target.value})}
        />

        <button className="manageForm__button" onClick={handleCreateProduct}>Dodaj</button>
    </div>
  )
};