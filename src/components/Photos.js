import React, { Component } from 'react'

const divStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  padding: '15px',
  marginRight: 'auto',
  marginLeft: 'auto'
};

const imgStyle = {
  height: '250px',
  width: '250px'
}

export default class Photos extends Component {

  constructor(props){
    super(props);
  }

  componentWillMount(){
    this.props.getPhotos();
  }
  render() {
    const photos = this.props.photos.map(element => (
      <div style={divStyle} key={element.id}>
        <img src={element.url} style={imgStyle} ></img>
        <button onClick={(e) => this.props.addtowishlist(element)}>Add</button>
      </div>
    ))
    return (
      <div style={divStyle}>
      {photos}
    </div>
    )
  }
}
