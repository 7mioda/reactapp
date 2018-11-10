import { FETCH_PHOTOS, FETCH_PHOTO } from '../actions/types';

const initialState = {
    photos: [],
    photo: {}
  };

const photoReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PHOTOS :
            state = {
                ...state,
                photos: action.payload
            };
            break;
         case FETCH_PHOTO :
            state = {
                ...state,
                photo: action.payload
            };
            break;   
    }
    return state;
};

export default photoReducer;