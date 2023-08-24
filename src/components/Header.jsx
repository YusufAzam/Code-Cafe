import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import CoffeeLogo from '../images/logo.svg';

function Header() {
  return (
    <header className="header-component">
      <Link to="/">
        <img src={CoffeeLogo} alt="coffee logo" />
        <h1>Code Cafe</h1>
      </Link>
    </header>
  );
}

export default Header;
