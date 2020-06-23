import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Section } from '../../components/Section/Section';
import { Spinner } from '../../components/Spinner/Spinner';
import { getALLProducts } from '../../redux/actions/products.actions';
import { getALLSections } from '../../redux/actions/sections.actions';
import { GET_ALL_SECTIONS_FAIL, GET_ALL_PRODUCTS_FAIL } from '../../redux/actions/types';
import './list.scss';

export const List = (props) => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.products.filter(current => current.toBuy === true));
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

  // Jeżeli nie ma żadnych produktów oznaczonych jako "toBuy"
  if(!products.length) {
    return (
      <div className="page">
        <div className="info">Nie masz nic do kupienia</div>
      </div>
    )
  }

  return (
    <div className="page list">
      {sections.map(section => (
        <Section 
          key={section._id} 
          header={section.name} 
          type="list"
        />)
      )}
    </div>
  )
};