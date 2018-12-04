import React, { Component } from 'react'
import Counter from './Counter.js'
import { connect } from "react-redux";

export default class CounterGroup extends Component {
    // state={
        // counterSum:0,
        // counters:new Array(parseInt(this.props.defaultCount)).fill(0).map(()=>{return {number:0,id: new Date().getTime()+Math.random() }}),
        // counterArr: new Array(parseInt(this.props.defaultCount)).fill(0)
    // }

    regenerateCounters=()=>{
        this.props.generateCounters(this.refs.countInput.value);
        this.props.clearCounterSum();
        this.refs.countInput.value=''
    }
    
    // updateInput=(event)=>{
    //     this.setState({input:event.target.value})
    // }
      

    render() {
        return (
            <div>
                {this.props.counterArr.map(counterItem=><Counter 
                // key={counterItem.id}
                id={counterItem.id}
                onCounterValueChanged={this.props.counterUpdateCallback} 
                onIncreased={this.props.increaseUpdate}
                counterNum={counterItem.number}
                onDecreased={this.props.decreaseUpdate}/>)}

                {/* <span>Sum: {this.state.counterSum}</span> */}
                <span>Sum: {this.props.counterSum}</span>


                <br/>
                <input type="text" ref="countInput" />
                <button onClick ={this.regenerateCounters}>Create Counter</button>
            </div>
        )
      }
//     state={counterArray:new Array(this.props.size).fill(0),
//     sum:0}
//     updateSum=(value)=>{
//         this.setState({sum:this.state.sum+value})
//         this.props.onUpdateSum(this.state.sum+value)
//     }
//   render() {
//     return (
//         <div>
//             {this.state.counterArray.map(each=><Counter onUpdate={this.updateSum}/>)}
//             {/* <span>{this.state.sum}</span> */}
//         </div>
//     )
//   }
}