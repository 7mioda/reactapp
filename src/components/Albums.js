import React from 'react'
import { NavLink } from 'react-router-dom'; 

const divStyle = {
  width: '50em',
 borderRight: '1px solid #000',
 padding: '0 0 1em 0',
 marginLeft: '20%',
 textAlign: 'center',
 marginBottom: '1em',
 backgroundColor: '#90bade',
 color: '#333'
}

export default (props) => {

    const albums = props.albums.map(element => (
      <div key={element.id}>
        <NavLink to={`/photos/${element.id}`} ><h3>{element.title.toUpperCase()}</h3></NavLink>
      </div>
    ))
  return (
    <div style={divStyle}>
    <h3>Oyez Albums</h3>
      {albums}
    </div>
  )
}
