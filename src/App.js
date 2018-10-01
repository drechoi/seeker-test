import React, { Component } from 'react';

import MainLayout from './components/layouts/MainLayout';
import { Provider } from 'react-redux';
import {store}  from './store';

import Auth from './Auth/Auth';

const auth = new Auth(); 

class App extends Component {
  render(){    
    return (
		  <Provider store={store}>
       	<MainLayout Auth={auth} />
      </Provider>
    );
  }
}

export default App;