import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './products.scss';
import { getALLProducts } from '../../redux/actions/products.actions';
import { getALLSections } from '../../redux/actions/sections.actions';

export const Products = (props) => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.products);
  const sections = useSelector(state => state.sections.sections);
  const loadingProducts = useSelector(state => state.products.loading);
  const loadingSections = useSelector(state => state.sections.loading);
  const isAuthenticated = useSelector(state => state.user.isAuth);

  useEffect(() => {
    if(isAuthenticated) {
      dispatch(getALLProducts());
      dispatch(getALLSections());
    }
  }, [dispatch])

  return (
    <div className="page products">
      Products
      {loadingProducts && loadingSections && "loading..."}
    </div>
  )
};