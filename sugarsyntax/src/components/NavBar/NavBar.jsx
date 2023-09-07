import React from 'react';
import './NavBar.css'; // Importa el archivo CSS

function NavBar() {
  return (
    <nav className="navbar">
      <div className="logo">Tu Ropita</div>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/productos">Productos</a></li>
        <li><a href="/contacto">Contacto</a></li>
      </ul>
      <div className="cart">
        <i className="fa fa-shopping-cart"></i>
        <span className="cart-count">0</span>
      </div>
    </nav>
  );
}

export default NavBar;