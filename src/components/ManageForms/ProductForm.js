import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import { Toast } from '../../components/Toast/Toast';
import { ManageList } from '../ManageList/ManageList';
import { getAllSections } from '../../redux/actions/sections.actions';
import { getAllShops } from '../../redux/actions/shops.actions';
import { getAllProducts } from '../../redux/actions/products.actions';

import './manageForms.scss';

export const ProductForm = (props) => {
  const dispatch = useDispatch();
  const sections = useSelector(state => state.sections.sections);
  const shops = useSelector(state => state.shops.shops);
  const products = useSelector(state => state.products.products);

  const [ productName, setProductName ] = useState('');
  const [ allProductsPanelVisible, setAllProductsPanelVisible ] = useState(false);

  useEffect(() => {
    dispatch(getAllSections());
    dispatch(getAllShops());
    dispatch(getAllProducts());
  }, [dispatch]);

  const handleCreateProduct = () => {
    if(!productName.trim()) {
      toast.error(<Toast info="Podaj nazwę nowego produktu"/>);
      return;
    } else {
      // dispatch(createSection(sectionName));
      toast.success(<Toast info="Produkt dodano"/>);
      setProductName('');
    }
  }

  return (
    <div className="manageForm productForm">
        productForm
    </div>
  )
};