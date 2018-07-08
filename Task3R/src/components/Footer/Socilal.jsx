import React, { Component } from 'react';

export default class Social extends Component {
  render() {
    const Icons = [
      ['Twitter', 'https://image.flaticon.com/icons/svg/23/23931.svg'],
      ['Facebook', 'https://image.flaticon.com/icons/svg/23/23747.svg'],
    ].map(([name, src], i) =>
    <a href=''>
      <img className='icon' key={i} src={src} alt={name} width={25} />
    </a>
);
    return (
      <div className='social'>
        {Icons}
      </div>
    );
  }
}
