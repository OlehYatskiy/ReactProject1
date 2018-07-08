import React, { Component } from 'react';

export default class NavList extends Component {
  render() {
    let Links = [
      ['Posts', ''],
      ['Media', ''],
      ['About us', ''],
      ['Back', ''],
      ['Help', ''],
    ].map(([link, src], i) =>
    <li>
      <a href={src}>{link}</a>
    </li>
);
    return (
      <ul id='footerlist'>
        {Links}
      </ul>
    );
  }
}
