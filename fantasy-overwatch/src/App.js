import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import SampleComponent from './SampleComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Fantasy Overwatch</h2>
        </header>
        <SampleComponent />
      </div>
    );
  }
}

export default App;
