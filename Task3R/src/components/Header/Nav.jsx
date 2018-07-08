import React from 'react';
import { NavLink } from 'react-router-dom';

export default class Nav extends React.Component {

  render() {

    return (
              <ul className="subheader">
                <li className="">
                  <NavLink to='/mauris' className="nav-link" href="#">Mauris</NavLink>
                </li>
                <li className="">
                  <NavLink to='/settings' className="nav-link" href="#">Settings</NavLink>
                </li>
                <li className="">
                  <NavLink to='/fement' className="nav-link" href="#">Fement</NavLink>
                </li>
              </ul>
    );
  }
}
