import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import countries from './../countries.json';

const Navbar = withRouter((props) => {
  return (
    <nav>
      <h1>Wiki Countries</h1>
    </nav>
  );
});

export default Navbar;
