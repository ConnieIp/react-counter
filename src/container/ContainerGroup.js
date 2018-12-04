import {connect} from 'react-redux'
import CounterGroup from '../components/CounterGroup'

const mapStateToProps = state => ({
    counterSum: state.counterSum,
    counterArr: state.counterArr
  });
  
  export default connect(mapStateToProps)(CounterGroup);