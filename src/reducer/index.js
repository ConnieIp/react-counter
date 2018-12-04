const initialState = {
    counterSum:0,
    counterArr:[]
}

export default (state = initialState, action) => {
  switch (action.type) {

  case "COUNTERSUM":
    return {counterSum:state.counterSum +  action.payload}
  case "CLEARSUM":
    return {counterSum: 0}
  case "GENERATECOUNTERS":
    return {counterArr:new Array(parseInt(action.payload)).fill(0).map(()=>{return {number:0,id:new Date().getTime()+Math.random()};})}  

  default:
    return state
  }
}
