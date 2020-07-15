import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Section } from '../../components/Section/Section';
import { Spinner } from '../../components/Spinner/Spinner';
import { SectionHeader } from '../../components/SectionHeader/SectionHeader';
import { ShopsMultiselect } from '../../components/ShopsMultiselect/ShopsMultiselect';
import { getAllProducts } from '../../redux/actions/products.actions';
import { getAllSections } from '../../redux/actions/sections.actions';
import { preperProductsList } from '../../helpers/preperProductsList';

import './products.scss';

export const Products = (props) => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.products);
  const sections = useSelector(state => state.sections.sections);
  const loadingProducts = useSelector(state => state.products.loading);
  const loadingSections = useSelector(state => state.sections.loading);
  const isAuthenticated = useSelector(state => state.user.isAuth);

  const [ shopFilters, setShopFilters ] = useState([]);
//---------------------------------------------------------------------------------------
  useEffect(() => {
    if(isAuthenticated) {
      dispatch(getAllProducts());
      dispatch(getAllSections());
    }
  }, [dispatch, isAuthenticated]);
//---------------------------------------------------------------------------------------
  // Jeżeli dany sklep był w tablicy "shopFilters" usuń go
  // Jeżeli danego sklepu nie ma w tablicy "shopFilters" dodaj go
  const manageShopFilters = (shopFilter) => {
    const indexOfShopFilter = shopFilters.findIndex(current => current === shopFilter)
    if(indexOfShopFilter >= 0) {
      const newShopFilters = shopFilters;
      newShopFilters.splice(indexOfShopFilter, 1)
      setShopFilters([...newShopFilters]);
    } else {
      setShopFilters(prevState => [...prevState, shopFilter])
    }
  }
//---------------------------------------------------------------------------------------
  if(loadingProducts || loadingSections) {
    return <Spinner />
  }

  // Jeżeli nie ma żadnych produktów oznaczonych jako "toBuy"
  if(!products.length) {
    return (
      <div className="page">
        <div className="info">Nie masz jeszcze dodanych produktów do sklepu</div>
      </div>
    )
  }

  return (
    <div className="page products">
      <SectionHeader name="Pokaż produkty w" />
      <ShopsMultiselect manageShopFilters={manageShopFilters} selectedShops={shopFilters} />
      <div className="linebreak"></div>

      {sections.map(section => (
        <Section 
          key={section._id} 
          header={section.name}
          products={preperProductsList(products, section.name, shopFilters)}
          type="products"
        />)
      )}

    </div>
  )
};