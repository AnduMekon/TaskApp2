import {createStore} from 'redux'



const incrementCount = ({incrementBy=5}={}) => ({
    type:'INCREMENT',
    incrementBy
})
const decrementCount = ({decrementBy=3}={}) => ({
    type: 'DECREMENT',
    decrementBy

})
const resetCount = ({count=0}={}) => ({
    type: 'RESET',
    count
})
const setCount = ({count=100}={}) => ({
    type: 'RESET',
    count
})
const store= createStore((state={count:0}, action)=> {
switch (action.type) {
    case 'INCREMENT':
        return ({
            count:state.count + action.incrementBy
        })
        
    case 'DECREMENT':
        return ({
            count:state.count - action.decrementBy
        })
    case 'RESET':
        return({
            count: action.count
        })
    case 'SET':
        return({
            count: action.count
        })
    default:
        break;
}


})
store.subscribe(()=>{
  console.log(store.getState());  
})
store.dispatch(incrementCount())
store.dispatch(decrementCount());
store.dispatch(resetCount());
store.dispatch(setCount())
