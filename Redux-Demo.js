
const redux = require('redux');

const counterReducer = (state = { counter: 0 }, action) => {
    if (action.type === "Increment") {
        // console.log('incrementing');
        return { counter: state.counter + 1 };
    }
    if (action.type === "Decrement") {
        // console.log('decrementing');
        return { counter: state.counter - 1 };
    }
    if (action.type === "INCREMENTBY2") {
        // console.log('decrementing');
        return { counter: state.counter +2};
    }
    if (action.type === "DECREMENTBY2") {
       
        return { counter: state.counter - 2};
    }

    return state;
};

const store = redux.createStore(counterReducer);
// console.log(store.getState())
const counterSubscriber = ()=>{
    const latestState= store.getState();
    console.log(latestState);
}
/*This line subscribes the counterSubscriber function to the Redux store. 
This means that whenever the state in the store changes (due to a dispatched action), 
the counterSubscriber function will be called automatically. */
store.subscribe(counterSubscriber);

store.dispatch({type:"Increment"})//state will be consoled only when the dispatch function is called and it is 2
//because of createStore it gets incremented to 2
// store.dispatch({type:"Increment"})
// store.dispatch({type:"Increment"})
// store.dispatch({type:"Increment"})

store.dispatch({type:"Decrement"})
store.dispatch({type:"INCREMENTBY2"})
store.dispatch({type:"DECREMENTBY2"})
