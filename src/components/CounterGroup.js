import React, { Component } from 'react'
import Counter from './Counter.js'
import { connect } from "react-redux";

export default class CounterGroup extends Component {
    // state={
        // counterSum:0,
        // counters:new Array(parseInt(this.props.defaultCount)).fill(0).map(()=>{return {number:0,id: new Date().getTime()+Math.random() }}),
        // counterArr: new Array(parseInt(this.props.defaultCount)).fill(0)
    // }

    counterUpdateCallback= changedNum =>{
        // this.setState({counterSum:this.state.counterSum + changedNum})
        this.props.dispatch({
            type: "COUNTERSUM",
            payload: changedNum
      }); 
    }

    increaseUpdate = (changedNum,id) =>{
        // const counters=this.props.counterArr.map(counterItem => {
        //     if(counterItem.id===id){
        //         return {number:counterItem.number + changedNum, id:id};
        //     }else{
        //         return counterItem;
        //     }
        // })
        // this.setState({counters:counters})
        this.props.dispatch({
            type: "INCREASE",
            payload:{changedNum,id}
      }); 
    }

    decreaseUpdate = (changedNum,id) =>{
        // const counters=this.props.counterArr.map(counterItem => {
        //     if(counterItem.id===id){
        //         return {number:counterItem.number - changedNum, id:id};
        //     }else{
        //         return counterItem;
        //     }
        // })
        // this.setState({counters:counters})
        this.props.dispatch({
            type: "DECREASE",
            payload:{changedNum,id}
      }); 
    }

    // updateInput=(event)=>{
    //     this.setState({input:event.target.value})
    // }

    regenerateCounters =()=> {
        // this.setState({
            // counters:new Array(parseInt(this.refs.countInput.value)).fill(0).map(()=>{return {number:0,id:new Date().getTime()+Math.random()};}),
            // counterArr: new Array(parseInt(this.refs.countInput.value)).fill(0),
            // counterSum: 0
        // });
        this.props.dispatch({
            type: "CLEARSUM"
      }); 
      this.props.dispatch({
          type:"GENERATECOUNTERS",
          payload:this.refs.countInput.value
      })
      this.refs.countInput.value=''
      }
      
      

    render() {
        return (
            <div>
                {this.props.counterArr.map(counterItem=><Counter 
                // key={counterItem.id}
                id={counterItem.id}
                onCounterValueChanged={this.counterUpdateCallback} 
                onIncreased={this.increaseUpdate}
                counterNum={counterItem.number}
                onDecreased={this.decreaseUpdate}/>)}

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