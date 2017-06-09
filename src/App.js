import React, { Component } from 'react';
import './App.css';
import HelloWorld from './components/HelloWorld';
import Clock from './components/Clock.js'
import Header from './components/Header.js'

class App extends Component {


  render() {
    return (
      <div className="App">
        <Header />
        <Clock /> 
      </div>
    );
  }
}

export default App;
