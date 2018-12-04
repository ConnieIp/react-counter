import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CounterGroup from './components/CounterGroup'
import CounterInput from './components/CounterInput'


class App extends Component {
  state={size:1,sum:0}
  changeSize=(newSize)=>{
    this.setState({size:newSize,sum:0})
  }
  sum=(sumNum)=>{
    this.setState({sum:sumNum})
  }
  render() {
    return (
      <div className="App">
        <CounterGroup key={this.state.size} size={this.state.size} onUpdateSum={this.sum}/>
        <CounterInput onChangeSize={this.changeSize}/>
        <span>Sum: {this.state.sum}</span>
      </div>
    );
  }
}

export default App;
