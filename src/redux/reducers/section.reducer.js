import { GET_SECTIONS, CREATE_SECTION, REMOVE_SECTION } from '../actions/types';

const defaultState = [];

export const sectionsReducer = (state = defaultState, action) => {
    switch(action.type) {
        case GET_SECTIONS:
            return [...action.sections];
        case CREATE_SECTION:
            return [...state, action.section];
        case REMOVE_SECTION:
            return state.filter(current => current.id !== action.section_id);
        default:
            return state;
    }
}