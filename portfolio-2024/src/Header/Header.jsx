import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <div className="navbar">
        <h2 className='site-subtitle'>Alailson Barbosa</h2>
      <div className={`navbar-toggle ${menuActive ? 'active' : ''}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <div className={`navbar-menu ${menuActive ? 'active' : ''}`} id="navbarMenu">
        <a className='links-style' href="#" onClick={toggleMenu}>Home</a>
        <a className='links-style' href="#sobre-id" onClick={(e) => handleScroll(e, 'sobre')}>Sobre</a>
        <a className='links-style' href="#servicos" onClick={(e) => handleScroll(e, 'servicos')}>Serviços</a>
        <a className='links-style' href="#" onClick={toggleMenu}>Contatos</a>
        <a className='links-style' href="#" onClick={toggleMenu}>Currículo</a>
      </div>
    </div>
  );
};

export default Header;
