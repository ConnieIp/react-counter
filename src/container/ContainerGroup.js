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
    })

});


  export default connect(mapStateToProps,mapDispatchToProps)(CounterGroup);