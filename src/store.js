import {createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import albumReducer from "./reducers/albumReducer";
import photoReducer from "./reducers/photoReducer";
import wishListReducer from "./reducers/wishListReducer";


const middleware = [thunk];

const store = createStore(
    combineReducers({
        albumReducer: albumReducer,
        photoReducer: photoReducer,
        wishListReducer: wishListReducer
    }),
    {},
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
      )
);

export default store ;