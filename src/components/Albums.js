import React from 'react'
import { NavLink } from 'react-router-dom'; 
export default (props) => {

    const albums = props.albums.map(element => (
      <div key={element.id}>
        <h3>{element.title}</h3>
      </div>
    ))
  return (
    <div>
      {albums}
    </div>
  )
}
