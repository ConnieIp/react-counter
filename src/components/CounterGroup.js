import React, { Component } from 'react'
import Counter from './Counter.js'

export default class CounterGroup extends Component {
    state={counterArray:new Array(this.props.size).fill(0),
    sum:0}
    updateSum=(value)=>{
        this.setState({sum:this.state.sum+value})
        this.props.onUpdateSum(this.state.sum+value)
    }
  render() {
    return (
        <div>
            {this.state.counterArray.map(each=><Counter onUpdate={this.updateSum}/>)}
            {/* <span>{this.state.sum}</span> */}
        </div>
    )
  }
}
