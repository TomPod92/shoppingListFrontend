import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Spinner } from '../../components/Spinner/Spinner';
import { getALLProducts } from '../../redux/actions/products.actions';
import { getALLSections } from '../../redux/actions/sections.actions';
import { GET_ALL_SECTIONS_FAIL, GET_ALL_PRODUCTS_FAIL } from '../../redux/actions/types';
import './list.scss';

export const List = (props) => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.user.isAuth);

  useEffect(() => {
    // dispatch({ type: GET_ALL_SECTIONS_FAIL });
    // dispatch({ type: GET_ALL_PRODUCTS_FAIL });

    if(isAuthenticated) {
      dispatch(getALLProducts());
      dispatch(getALLSections());
    }
  }, [dispatch, isAuthenticated])
  return (
    <div className="page list">
      List
    </div>
  )
};