import { combineReducers } from 'redux';
import { userReducer } from './user.reducer';
import { productsReducer } from './products.reducer';
import { sectionsReducer } from './sections.reducer';
import { shopsReducer } from './shops.reducer';

export default combineReducers({
    user: userReducer,
    products: productsReducer,
    sections: sectionsReducer,
    shops: shopsReducer
});