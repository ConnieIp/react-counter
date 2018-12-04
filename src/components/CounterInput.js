import React, { Component } from 'react'
import CounterGroup from './CounterGroup';

export default class CounterInput extends Component {
    state={input:''}
    updateInput=(event)=>{
        this.setState({input:event.target.value})
    }
    clickChange=()=>{
        this.props.onChangeSize(parseInt(this.state.input))
        this.setState({input:''})
    }
  render() {
    return (
      <div>
        <input type='text' onChange={this.updateInput} value={this.state.input}></input>
        <button onClick={this.clickChange}>change counter number</button>
      </div>
    )
  }
}
