import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import { Toast } from '../../components/Toast/Toast';
import { ManageList } from '../ManageList/ManageList';
import { ShopsMultiselect } from '../../components/ShopsMultiselect/ShopsMultiselect';
import { SectionsSelect } from '../../components/SectionsSelect/SectionsSelect';
import { getAllProducts, createProduct, updateProduct } from '../../redux/actions/products.actions';

import './manageForms.scss';

export const ProductForm = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.products);
  const productToUpdate = useSelector(state => state.products.productToUpdate);

  const [ newProduct, setNewProduct ] = useState({
    name:'',
    section:'',
    shops:[]
  });
  const [ allProductsPanelVisible, setAllProductsPanelVisible ] = useState(false);
//---------------------------------------------------------------------------------------
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

//---------------------------------------------------------------------------------------
// Po naciśnięciu "edit" ustaw pola "newProduct" zgodnie z tymi, które są na klikniętym produkcie
  useEffect(() => {
    if(productToUpdate.name) {
      // setNewProduct({
      //   name: productToUpdate.name,
      //   section: productToUpdate.section,
      //   shops: productToUpdate.shops
      // });
      setNewProduct({...productToUpdate})
    }
  }, [productToUpdate])
//---------------------------------------------------------------------------------------
const validateForm = () => {
  let valid = true;

  if(!newProduct.name.trim()) {
    toast.error(<Toast info="Podaj nazwę nowego produktu"/>);
    valid = false;
  } 
  if(!newProduct.section.trim()) {
    toast.error(<Toast info="Podaj nazwę działu"/>);
    valid = false;
  } 
  if(newProduct.shops.length === 0) {
    toast.error(<Toast info="Wbierz przynajmniej jeden sklep"/>);
    valid = false;
  }

  return valid;

}
//---------------------------------------------------------------------------------------
  const handleCreateProduct = () => {
    if(!validateForm()){
      return;
    }

    // Jeżeli "newProduct" posiada "_id" trzeba produkt aktualizowac. Jeżeli nie należy dodać nowy produkt
    if(newProduct._id) {
      const product_id = newProduct._id;
      const updates = {
        name: newProduct.name,
        section: newProduct.section,
        shops: newProduct.shops
      }
      dispatch(updateProduct(product_id, updates))
      toast.success(<Toast info="Produkt zaktualizowano"/>);
    } else {
      dispatch(createProduct(newProduct));
      toast.success(<Toast info="Produkt dodano"/>);
    }

    setNewProduct({
      name:'',
      section:'',
      shops:[]
    });
  }
//---------------------------------------------------------------------------------------
const handleClearFields = () => setNewProduct({
  name:'',
  section:'',
  shops:[]
})
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
        <ShopsMultiselect manageShopFilters={manageShopFilters} selectedShops={newProduct.shops} />

        <h2 className="manageForm__header">Lista działów:</h2>
        <SectionsSelect manageSections={manageSections} selectedSection={newProduct.section} /> 

        <button className="manageForm__button--add" onClick={handleCreateProduct}>{newProduct._id ? "Aktualizuj": "Dodaj"}</button>
        <button className="manageForm__button--clear" onClick={handleClearFields}>Wyczyść</button>

        <div className="manageForm__panelButton" >
          <button onClick={() => setAllProductsPanelVisible(prevState => !prevState)}>
            { allProductsPanelVisible ? "Zwiń" : "Pokaż" } listę produktów
          </button>
        </div>

        { allProductsPanelVisible && <ManageList items={products} type="products" /> }
    </div>
  )
};