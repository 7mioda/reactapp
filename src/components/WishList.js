import React from 'react'

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

export default (props) => {
  const photos = props.wishlist.map(element => (
    <div style={divStyle} key={element.id}>
      <img src={element.url} style={imgStyle} ></img>
    </div>
    ));

  return (
    <div style={divStyle}>
      {photos}
    </div>
  )
}
