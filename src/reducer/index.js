const initialState = {
    counterSum:0
}

export default (state = initialState, action) => {
  switch (action.type) {

  case "COUNTERSUM":
    return {counterSum:state.counterSum +  action.payload}

  default:
    return state
  }
}
