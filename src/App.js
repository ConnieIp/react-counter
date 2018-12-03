import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CounterGroup from './components/CounterGroup'


class App extends Component {
  
  render() {
    return (
      <div className="App">
        <CounterGroup size={5}/>
      </div>
    );
  }
}

export default App;
