import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import { Toast } from '../../components/Toast/Toast';
import { SectionHeader } from '../SectionHeader/SectionHeader';
import { ManageList } from '../ManageList/ManageList';
import { ShopsMultiselect } from '../../components/ShopsMultiselect/ShopsMultiselect';
import { SectionsSelect } from '../../components/SectionsSelect/SectionsSelect';
import { getAllSections } from '../../redux/actions/sections.actions';
import { getAllShops } from '../../redux/actions/shops.actions';
import { getAllProducts, createProduct, updateProduct } from '../../redux/actions/products.actions';

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
//---------------------------------------------------------------------------------------
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);
//---------------------------------------------------------------------------------------
  const handleCreateProduct = () => {
    if(!newProduct.name.trim()) {
      toast.error(<Toast info="Podaj nazwę nowego produktu"/>);
      return;
    } else {
      dispatch(createProduct(newProduct));
      toast.success(<Toast info="Produkt dodano"/>);
      setNewProduct({
        name: '',
        section: '',
        shops: []
      });
    }
  }
//---------------------------------------------------------------------------------------
  // Jeżeli dany sklep był w tablicy "shopFilters" usuń go
  // Jeżeli danego sklepu nie ma w tablicy "shopFilters" dodaj go
  const manageShopFilters = (shopFilter) => {
    const indexOfShopFilter = newProduct.shops.findIndex(current => current === shopFilter)
    if(indexOfShopFilter >= 0) {
      const newShopFilters = [...newProduct.shops];
      newShopFilters.splice(indexOfShopFilter, 1)
      setNewProduct({
        ...newProduct,
        shops: [...newShopFilters]
      })
    } else {
      setNewProduct({
        ...newProduct,
        shops: [...newProduct.shops, shopFilter]
      })
    }
  }
//---------------------------------------------------------------------------------------
const manageSections = (section) => {
  setNewProduct({
    ...newProduct,
    section: section
  })
}
//---------------------------------------------------------------------------------------
  return (
    <div className="manageForm productForm">
        <input 
          className="manageForm__input"
          type="text"
          placeholder="Nazwa produktu"
          value={newProduct.name}
          onChange={(event) => setNewProduct({...newProduct, name: event.target.value})}
        />

        <h2 className="manageForm__header">Lista sklepów:</h2>
        {/* <ShopsMultiselect manageShopFilters={manageShopFilters}/> */}
        {/* // test */}
        <ShopsMultiselect manageShopFilters={manageShopFilters} selectedShops={newProduct.shops} />

        <h2 className="manageForm__header">Lista działów:</h2>
        {/* <SectionsSelect manageSections={manageSections} /> */}
        {/* // test */}
        <SectionsSelect manageSections={manageSections} selectedSection={newProduct.section} /> 

        <button className="manageForm__button" onClick={handleCreateProduct}>Dodaj</button>

        <div className="manageForm__panelButton" >
          <button onClick={() => setAllProductsPanelVisible(prevState => !prevState)}>
            { allProductsPanelVisible ? "Zwiń" : "Pokaż" } listę produktów
          </button>
        </div>

        { allProductsPanelVisible && <ManageList items={products} type="products" /> }
    </div>
  )
};