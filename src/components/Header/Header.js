import React, { Component } from 'react';
import logo from './logo.svg';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <img src={logo} className="HeaderLogo" alt="logo" />
        <h2>Task 2A on React</h2>
      </div>
    );
  }
}

export default Header;
