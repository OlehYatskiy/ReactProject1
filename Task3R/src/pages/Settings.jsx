import React from 'react';

import Article from '../components/Article';

export default class Settings extends React.Component {
  render() {

    const Articles = [
      'Some Article',
      'Some Other Article',
      'Another one',
      'Still More',
      'Some Article',
      'Some Other Article',
      'Another one',
      'Still More',
    ].map((title, i) => <Article key={i} title={title} />);

    return (
        <div>
          <h2 className='my-4'>Settings</h2>
          <div className='row'>
            {Articles}
          </div>
        </div>
    );
  }
}
