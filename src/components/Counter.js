import React, { Component } from 'react'

export default class Counter extends Component {
    increaseNumber=(id)=>{
        this.props.onIncreased(1,id);
        this.props.onCounterValueChanged(1);
    }
    decreaseNumber=(id)=>{
        this.props.onDecreased(1,id);
        this.props.onCounterValueChanged(-1);
    }
    render(){
        return(
            <div>
                <button onClick={()=>this.increaseNumber(this.props.id)}>+</button>
                <span>{this.props.counterNum}</span>
                <button onClick={()=>this.decreaseNumber(this.props.id)}>-</button>
            </div>
        )
    }
//     state={number:0}
//   increase=()=>{
//     this.setState({number:this.state.number+1})
//     this.props.onUpdate(1)
//   }
//   decrease=()=>{
//     this.setState({number:this.state.number-1})
//     this.props.onUpdate(-1)
//   }
//   render() {
//     return (
//       <div>
//         <button onClick={this.increase}>+</button>
//         <span>{this.state.number}</span>
//         <button onClick={this.decrease}>-</button>
//       </div>
//     )
//   }
}
