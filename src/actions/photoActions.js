import { FETCH_PHOTOS } from './types';

export const fetchPhotos = () => dispatch => {
  fetch('https://jsonplaceholder.typicode.com/photos?albumId=2')
    .then(res => res.json())
    .then(photos =>
      dispatch({
        type: FETCH_PHOTOS,
        payload: photos
      })
    );
};