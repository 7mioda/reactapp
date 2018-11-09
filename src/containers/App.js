import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import { fetchAlbums } from '../actions/albumActions';
import { fetchPhotos } from '../actions/photoActions';
import { addToWishList } from '../actions/wishListActions';
import { connect } from 'react-redux';

import Navigation from '../components/Navigation';
import WishList from '../components/WishList';
import Albums from '../components/Albums';
import Photos from '../components/Photos';


 class App extends React.Component {

    componentWillMount() {
        this.props.fetchAlbums();
      }

    render(){
        return (
                  <BrowserRouter>
                  <div>
                      <Navigation count={this.props.wishListCount}/>
                      <Switch>
                        <Route path="/"  render={()=><Albums albums={this.props.albums}/>} exact />
                        <Route path="/photos/:idAlbum" render={()=><Photos photos={this.props.photos} getPhotos={this.props.fetchPhotos} addtowishlist={this.props.addToWishList}  /> } />
                        <Route path="/wishlist" render={()=> <WishList wishlist={this.props.wishlist} /> } />
                      </Switch>
                 </div>
                </BrowserRouter>
          );
    }
};

App.propTypes = {
    fetchAlbums: PropTypes.func.isRequired,
    fetchPhotos: PropTypes.func.isRequired,
    addToWishList: PropTypes.func.isRequired,
    albums: PropTypes.array.isRequired,
    photos: PropTypes.array.isRequired,
    wishlist: PropTypes.array.isRequired,
    wishListCount: PropTypes.number.isRequired
  };

const mapStateToProps  = state => ({
        albums: state.albumReducer.albums,
        photos: state.photoReducer.photos,
        wishlist: state.wishListReducer.wishlist,
        wishListCount: state.wishListReducer.count
})

export default connect( mapStateToProps , { fetchAlbums, fetchPhotos, addToWishList })(App);