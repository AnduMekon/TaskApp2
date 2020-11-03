import {createStore} from "redux"

const store = createStore((state={count:5} ,action) => {
   switch (action.type) {
       case 'INCREMENT':
           return ({
               count: state.count +1
           })
        case 'DECREMENT':
            return (
                {
                    count: state.count -4
                }
            )
           
        
   
       default:
           return state
   }

})
store.dispatch ({type:'INCREMENT'})
store.dispatch({ type: 'DECREMENT'})
console.log(store.getState())