import React from 'react';
import logo from './fnl_logo.svg';
import './App.css';
import FreeSnacksListingPoints from '../FreeSnacksListingPoints/';

class App extends React.Component {
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

        </header>
        <FreeSnacksListingPoints />
      </div>
    );
  }
}

export default App;



