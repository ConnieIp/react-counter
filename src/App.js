import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state={number:0}
  increase=()=>{
    this.setState({number:this.state.number+1})
  }
  decrease=()=>{
    this.setState({number:this.state.number-1})
  }
  render() {
    return (
      <div className="App">
        <button onClick={this.increase}>+</button>
        <span>{this.state.number}</span>
        <button onClick={this.decrease}>-</button>
      </div>
    );
  }
}

export default App;
