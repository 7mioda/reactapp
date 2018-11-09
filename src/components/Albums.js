import React from 'react'
import { NavLink } from 'react-router-dom'; 
export default (props) => {

    const albums = props.albums.map(element => (
      <NavLink to="/photos">{}</NavLink>
    ))
  return (
    <div>
      {albums}
    </div>
  )
}
