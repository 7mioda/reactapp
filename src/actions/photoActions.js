import { FETCH_PHOTOS, FETCH_PHOTO } from './types';

export const fetchPhotos = (albumId) => dispatch => {
  fetch('https://jsonplaceholder.typicode.com/photos?albumId=' + albumId)
    .then(res => res.json())
    .then(photos =>
      dispatch({
        type: FETCH_PHOTOS,
        payload: photos
      })
    );
};

export const fetchPhoto = (photoId) => dispatch => {
  fetch('https://jsonplaceholder.typicode.com/photos/' + photoId)
    .then(res => res.json())
    .then(photo =>
      dispatch({
        type: FETCH_PHOTO,
        payload: photo
      })
    );
};