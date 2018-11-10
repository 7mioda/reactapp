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

export default class Photo extends Component {

  constructor(props){
    super(props);
  }

  componentWillMount(){
    this.props.getPhoto(this.props.photoId);
  }
  render() {
    return (
      <div style={divStyle}>
      <div style={divStyle} key={this.props.photo.id}>
        <img src={this.props.photo.url} style={imgStyle} ></img>
        <p>{this.props.photo.title}</p>
      </div>
      <button onClick={(e) => this.props.addtowishlist(this.props.photo)}>Add</button>
    </div>
    )
  }
}
