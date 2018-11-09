import { ADD_PHOTO } from './types';

export const addToWishList = (photo) => dispatch => {
      dispatch({
        type: ADD_PHOTO,
        payload: photo
      })
};