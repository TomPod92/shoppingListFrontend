import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


import { SectionHeader } from '../../components/SectionHeader/SectionHeader';
import { ProductListItem } from '../../components/ProductListItem/ProductListItem';
import { Section } from '../../components/Section/Section';
import { Spinner } from '../../components/Spinner/Spinner';
import { getALLProducts } from '../../redux/actions/products.actions';
import { getALLSections } from '../../redux/actions/sections.actions';

import './products.scss';

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
  }, [dispatch, isAuthenticated])

  if(loadingProducts || loadingSections) {
    return <Spinner />
  }

  return (
    <div className="page products">
      {/* <Spinner /> */}
      {sections.map(section => <Section key={section._id} header={section.name} products={products.filter(product => product.section === section.name)}/>)}
    </div>
  )
};