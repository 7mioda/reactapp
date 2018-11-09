import { ADD_PHOTO } from '../actions/types';


const initialState = {
    count: 0,
    wishlist: []
  };

const wishListReducer = (state = initialState, action) => {
    switch (action.type) { 
        case ADD_PHOTO:
            if(state.wishlist.find((element)=>{ return (element.id == action.payload.id)}) == undefined){
            state = {
                ...state,
                count: state.count+1,
                wishlist: [...state.wishlist,action.payload]
            };}
            break;
    }
    return state;
};

export default wishListReducer;