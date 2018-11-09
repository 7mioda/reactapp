import { FETCH_ALBUMS } from '../actions/types';

const initialState = {
  albums: []
};


const albumReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ALBUMS:
            state = {
                ...state,
                albums: action.payload
            };
            break;
    }
    return state;
};

export default albumReducer;