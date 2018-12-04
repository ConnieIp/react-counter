import {connect} from 'react-redux'
import CounterGroup from '../components/CounterGroup'

const mapStateToProps = state => ({
    counterSum: state.counterSum,
    counterArr: state.counterArr
  });

const mapDispatchToProps = dispatch => ({
    counterUpdateCallback: changedNum =>dispatch({
            type: "COUNTERSUM",
            payload: changedNum
    }),

    increaseUpdate : (changedNum,id) =>dispatch({
            type: "INCREASE",
            payload:{changedNum,id}
    }),

    decreaseUpdate : (changedNum,id) =>dispatch({
            type: "DECREASE",
            payload:{changedNum,id}
      }),
      
      generateCounters :(counterNum)=> dispatch({
            type: "GENERATECOUNTERS",
            payload: parseInt(counterNum)
      }), 
      clearCounterSum:()=> dispatch({
          type:"CLEARSUM"
      })
    //   this.refs.countInput.value=''
    
});


  export default connect(mapStateToProps,mapDispatchToProps)(CounterGroup);