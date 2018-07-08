
import React, { Component } from 'react';
import Sidebar from './containerMain/Sidebar';
import response from '../pages/contents/Content';
import Article from './Article';

export default class ContainerMain extends Component {
  render() {
    const mainTitle = 'In eu mi bibendum';
    const Articles = [];
    for (let key in response) {
      Articles.push(<Article title={key} text={response[key]}/>);
    }

    return (
      <div className='container-main clearfix'>
        <Sidebar/>
        <div className='content'>
          <h1>{mainTitle}</h1>
            {Articles}
        </div>
      </div>
    );
  }
}
