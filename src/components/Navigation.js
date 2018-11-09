import React from "react";
import { NavLink } from 'react-router-dom'; 

const Navigation = (props) => {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/photo">Photos</NavLink>
      <NavLink to="/wishlist">Wishlist</NavLink>
      <h3>{props.count}</h3>
    </div>
  );
};

export default Navigation;