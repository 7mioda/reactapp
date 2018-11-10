import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'; 

const containerStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  paddingLeft: '10%',
  marginRight: 'auto',
  marginLeft: 'auto'
};


const divStyle = {
  display: 'flex',
  flexDirection: 'column',
  padding: '5px',
  margin: '5px',
  boxShadow: '0 15px 30px 1px rgba(128, 128, 128, 0.31)',
	background: 'rgba(255, 255, 255, 0.90)',
	textAlign: 'center',
	borderRadius: '5px'
	
};

const imgStyle = {
  height: '250px',
  width: '250px'
}

const btnStyle = {
    backgroundColor: '#4CAF50', 
    border: 'none',
    borderRadius: '2px',
    color: 'white',
    padding: '15px 32px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '16px',
    cursor: 'pointer'
};

export default class Photos extends Component {

  constructor(props){
    super(props);
  }

  componentWillMount(){
    this.props.getPhotos(this.props.albumId);
  }
  render() {
    const photos = this.props.photos.map(element => (
      <div style={divStyle} key={element.id}>
        <NavLink to={`/photo/${element.id}`} ><img src={element.url} style={imgStyle} ></img></NavLink>
        <button style={btnStyle} onClick={(e) => this.props.addtowishlist(element)}>Add to WishList</button>
      </div>
    ))
    return (
      <div style={containerStyle}>
      {photos}
    </div>
    )
  }
}
