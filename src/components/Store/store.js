// import {createStore} from 'redux';
import {createSlice , configureStore} from '@reduxjs/toolkit'
const initialCounterState = {
    counter :0 , showCounter :true,
}
const initialAuthState = {
    isAuthenticated: false
}
//slice of global state
const counterSlice = createSlice({
    name:'counter',//needs a name
    initialState:initialCounterState,
    reducers:{
        increment(state){
            console.log(state.counter);
            state.counter++;//internally redux toolkit clones the value using immer dependency
        },
        decrement(state) {
            console.log(state.counter);
            state.counter--
        },
        incrementByValue(state,action){ 
            state.counter+=action.payload},
        decrementByValue (state , action){state.counter-=action.payload},
        toggleCounter (state) { 
            // console.log(state.showCounter)
            state.showCounter = !state.showCounter
        },
    }

});
const authSlice = createSlice({
    name:'authentication',
    initialState:initialAuthState,
    reducers:{
        login(state){
            state.isAuthenticated = true;
        },
        logout(state){
            state.isAuthenticated = false;
        }
    }
})

//creates a store by merging all the reducers
export const store = configureStore({
    reducer : {
        counter : counterSlice.reducer,
        authentication : authSlice.reducer,
    }
})
export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;
// const counterReducer = (state=initialState , action) =>{
//     if (action.type === "Increment") {
//         //return will replace the exisiting state and doesnot merges so thats why need to pass all the data
//         return { counter: state.counter + 1 , showCounter:state.showCounter };
//     }
//     if (action.type === "Decrement") {
        
//         return { counter: state.counter - 1 , showCounter:state.showCounter};
//     }
//     if (action.type === "INCREMENTBY5") {
//         // console.log('decrementing');
//         return { counter: state.counter +action.value , showCounter:state.showCounter};
//     }
//     if (action.type === "DECREMENTBY5") {
       
//         return { counter: state.counter - action.value , showCounter:state.showCounter};
//     }
//     if(action.type==="toggle"){
//         return {
//             counter :state.counter,
//             showCounter:!state.showCounter
//         }
//     }
//     return state;
// }
// const store = createStore(counterReducer);

