import React, { Component } from 'react';

import Burger from './Burger';

export default class Main extends Component {
  render() {
    return (
      <div className='sidebar_outer' id='sidebar_outer'>
        <div className='sidebar' id='sidebar'>
          <Burger/>
        </div>
      </div>
    );
  }
}
