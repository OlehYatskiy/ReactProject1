import React, { Component } from 'react';

export default class AutReg extends Component {
  render() {
    return (
      <form className='autoriz-reg-form' name="logIn">
        <input className="submit" type="submit" name="submit" value="" id="auth"/>
        <span>Login:</span>
        <input type="text" name="loginfield" id="auth_login"/>
        <span>Password:</span>
        <input type="password" name="passfield" id="auth_password"/>
        <span>
          <i>Don't have an account?:</i>
          <span id="reg" onclick="displayRegisterPopup()">Register</span>
        </span>
        <span className="warning">Warning!</span>
      </form>
    );
  }
}
