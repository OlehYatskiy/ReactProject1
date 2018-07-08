import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';

import './Css/normalize.css';
import './Css/media-queries.css';
import './Css/main.css';
import './Css/reg-form.css';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
    document.getElementById('root')
 );
registerServiceWorker();
