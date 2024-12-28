import React from 'react';
import { Link } from 'react-router-dom';  // Usamos Link para la navegación en React
import './NavBar.css'; 

const NavBar = () => {
  return (
    <div className="navbar">
      <Link to="/">Inicio</Link>
      <Link to="/service">Servicios</Link>
      <Link to="/contact">Contacto</Link>
    </div>
  );
};

export default NavBar;
