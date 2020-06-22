import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';

import { GET_ALL_SECTIONS_FAIL, GET_ALL_PRODUCTS_FAIL } from '../../redux/actions/types';
import './list.scss';

export const List = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: GET_ALL_SECTIONS_FAIL });
    dispatch({ type: GET_ALL_PRODUCTS_FAIL });
  }, [dispatch])
  return (
    <div className="page list">
      List
    </div>
  )
};