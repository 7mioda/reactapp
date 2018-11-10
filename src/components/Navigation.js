import React from "react";
import {  NavLink } from 'react-router-dom'; 

const container = {
  maxWidth: '100%',
  margin: "0 auto"
}

const header = {
  display: "inline",
  padding: 0,
  margin: 0,
  listStyleType: "none"
};

const nav = {
  backgroundColor: "#111",
  display: "flex"
};

const logo = {
  padding: "10px 10px 0 10px"
}

const liStyle = {
  display: "inline-block"
}

const link = {
 color: "#FFF",
 fontWeight: "bold",
 textDecoration: "none",
 display: "inline-block",
 padding: 25,
}

const content = {
 backgroundColor: "#FFF",
 padding: "20px 28px"
}

const Navigation = (props) => {
  return (
    <div style={container}>
    <nav style={nav}>
      <NavLink  style={link} activeStyle={{ backgroundColor: '#53C1DE' }} exact to="/">Home</NavLink>
      <NavLink style={link} activeStyle={{ backgroundColor: '#53C1DE' }}  to="/wishlist">Wishlist <span>{props.count}</span> </NavLink>
    </nav>
    </div>
  );
};

export default Navigation;