import React, { Component } from 'react';
import Social from './Socilal';
import NavList from './NavList';

export default class Footer extends Component {
  render() {

    return (
      <footer>
        <Social/>
        <NavList/>
        <div>©by OlehYatskiy</div>
      </footer>
    );
  }
}
