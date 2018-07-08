import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import logo from './logo.svg';

import Header from './components/Header/Header';
import Nav from './components/Header/Nav';
import ContainerMain from './components/ContainerMain';
import Footer from './components/Footer/Footer';
import Settings from './pages/Settings';

//import Todos from './pages/Todos';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='wrapper'>
          <div className='outer_content clearfix'>
            <Header/>
            <div className='container'>
                <Switch>
                  <Route exact path='/' name='featured'  />
                  <Route path='/archives/:article' name='archives'  />
                  <Route path='/settings' component={ContainerMain} />
                </Switch>
            </div>{/*container end*/}
          </div>
          <Footer />
        </div>{/*wrapper */}
      </div>//app End
    );
  }
}

export default App;
