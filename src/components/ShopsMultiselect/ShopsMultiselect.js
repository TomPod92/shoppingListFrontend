import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getAllShops } from '../../redux/actions/shops.actions';

import './shopsMultiselect.scss';

export const ShopsMultiselect = (props) => {
    const dispatch = useDispatch();
    const isAuthenticated = useSelector(state => state.user.isAuth);
    const shops = useSelector(state => state.shops.shops);
    const loadingShops = useSelector(state => state.shops.loading);

    useEffect(() => {
        if(isAuthenticated) {
          dispatch(getAllShops());
        }
    }, [dispatch, isAuthenticated]);

    if(loadingShops) {
        return null
    }

    return (
        <div className="shopsMultiSelect">
            {shops.map(current => (
                <div key={current._id} className="shopOption">
                    <input
                        id={current.name}
                        className="shopOption__input"
                        type="checkbox" 
                        value={current.name}
                        onChange={() => props.manageShopFilters(current.name)}
                    />
                    <label className="shopOption__label" htmlFor={current.name} key={current._id}> {current.name}</label>
                </div>
            ))}
        </div>
    )
};