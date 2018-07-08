import React, { Component } from 'react';

export default class Article extends Component {
  render() {
    const { title, text } = this.props;

    return (
      <div>
            <h3>{ title }</h3>
            <p>{ text }</p>
      </div>
    );
  }
}
