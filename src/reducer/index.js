const initialState = {
    counterSum:0
}

export default (state = initialState, action) => {
  switch (action.type) {

  case "COUNTERSUM":
    return {counterSum:state.counterSum +  action.payload}
  case "CLEARSUM":
    return {counterSum: 0}

  default:
    return state
  }
}
