import React, { Component } from 'react';
import logo from '../Resources/logo.svg';
import '../Styles/App.css';
import ApiConsult from './ApiConsult';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Data Police Uk</h1>
          <p>API: <a href="https://data.police.uk/docs/method/crime-street/">https://data.police.uk/docs/method/crime-street/</a></p>
          
        </header>
        <ApiConsult/>
      </div>
    );
  }
}

export default App;
