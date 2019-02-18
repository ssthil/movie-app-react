import React from 'react';
import Logo from './Logo';

const Menu = () => (
  <ul>
    <li>
      <a href="#!">Browse</a>
    </li>
    <li>
      <a href="#!">Rent</a>
    </li>
  </ul>
);

const TopMenu = () => (
  <div className="top-menu">
    <Logo />
    <Menu />
  </div>
);

export default TopMenu;
