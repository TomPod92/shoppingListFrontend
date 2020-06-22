import { combineReducers } from 'redux';
import { userReducer } from './user.reducer';
import { productsReducer } from './products.reducer';
import { sectionsReducer } from './sections.reducer';

export default combineReducers({
    user: userReducer,
    products: productsReducer,
    sections: sectionsReducer
});