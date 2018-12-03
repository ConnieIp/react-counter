import React, { Component } from 'react'

export default class Counter extends Component {
    state={number:0}
  increase=()=>{
    this.setState({number:this.state.number+1})
    this.props.onUpdate(1)
  }
  decrease=()=>{
    this.setState({number:this.state.number-1})
    this.props.onUpdate(-1)
  }
  render() {
    return (
      <div>
        <button onClick={this.increase}>+</button>
        <span>{this.state.number}</span>
        <button onClick={this.decrease}>-</button>
      </div>
    )
  }
}
