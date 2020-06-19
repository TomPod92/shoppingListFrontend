import { combineReducers } from 'redux';
import { sectionsReducer } from './section.reducer';
import { userReducer } from './user.reducer';

export default combineReducers({
    sections: sectionsReducer,
    user: userReducer
});