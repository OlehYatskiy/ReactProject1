import React, { Component } from 'react';
import Logout from './Logout';
import AutReg from './AutReg';
import Nav from './Nav';

export default class Header extends Component {
  render() {
    return (
      <header className="clearfix">
        <img
          src="https://assets.htmlacademy.ru/img/logo.v2.svg"
          width="124"
          height="36"
          alt="HTMLAcademy">
        </img>
        <div className="autoriz-reg">
          <AutReg/>
        </div>
        <Nav/>
      </header>
    );
  }
}
