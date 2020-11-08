import {createStore, combineReducers} from 'redux';


const expensesReducer = (state= {count:0, name: 'Andualem'},action) => {
    return state

}
const filtersReducers = (state={}, action) => {
    return state

}

const store = createStore(combineReducers({
    expenses: expensesReducer,
    filters: filtersReducers
}))
console.log(store.getState())