import { FETCH_PHOTOS } from '../actions/types';

const initialState = {
    photos: []
  };

const photoReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PHOTOS :
            state = {
                ...state,
                photos: action.payload
            };
            break;
    }
    return state;
};

export default photoReducer;