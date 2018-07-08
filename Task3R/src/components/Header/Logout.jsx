import React, { Component } from 'react';

export default class Logout extends Component {
  render() {
    return (
      <form className='logOut clearfix' name="logOut">
        <span>Welcome user</span>
        <button>LogOut</button>
      </form>
    );
  }
}
