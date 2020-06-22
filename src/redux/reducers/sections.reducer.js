import { GET_ALL_SECTIONS_SUCCESS, GET_ALL_SECTIONS_FAIL, GET_ALL_SECTIONS_REQUEST } from '../actions/types';

const defaultState = {
    sections: [],
    loading: true,
};

export const sectionsReducer = (state = defaultState, action) => {
    switch(action.type) {
        case GET_ALL_SECTIONS_REQUEST:
            return defaultState
        case GET_ALL_SECTIONS_SUCCESS:
            return {
                sections: action.sections,
                loading: false
            }
        case GET_ALL_SECTIONS_FAIL:
            return defaultState
        default:
            return state;
    }
}