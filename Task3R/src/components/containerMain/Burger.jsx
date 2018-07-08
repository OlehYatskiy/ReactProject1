import React, { Component } from 'react';

export default class Burger extends Component {
  render() {
    var rows = [];
    for (let i = 0; i < 3; i++) {
      rows.push(<span className='divide'/>);
    }

    return (
      <div className='burger' id='burger'>
        {rows}
      </div>
    );
  }
}
