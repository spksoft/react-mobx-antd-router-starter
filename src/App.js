import React, { Component } from 'react';
import Router from './router';
import { Provider } from 'mobx-react'
import * as store from './stores'
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider { ...store }>
        <Router />
      </Provider>
    );
  }
}

export default App;
