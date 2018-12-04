const initialState = {
    counterSum:0,
    counterArr:[]
}

export default (state = initialState, action) => {
  switch (action.type) {

  case "COUNTERSUM":
    return {...state,counterSum:state.counterSum +  action.payload}
  case "CLEARSUM":
    return {...state,counterSum: 0}
  case "GENERATECOUNTERS":
    return {...state,counterArr:new Array(parseInt(action.payload)).fill(0).map(()=>{return {number:0,id:new Date().getTime()+Math.random()};})}  
  case "INCREASE":
      const changedIncreaseArr = state.counterArr.map(counterItem => {
        if (counterItem.id === action.payload.id) {
          return {
            number: counterItem.number + action.payload.changedNum,
            id: action.payload.id
          };
        } else {
          return counterItem;
        }
      });
      return { ...state, counterArr: changedIncreaseArr };

  case "DECREASE":
      const changedDecreaseArr = state.counterArr.map(counterItem => {
        if (counterItem.id === action.payload.id) {
          return {
            number: counterItem.number - action.payload.changedNum,
            id: action.payload.id
          };
        } else {
          return counterItem;
        }
      });
      return { ...state,counterArr: changedDecreaseArr };

  default:
    return state
  }
}
