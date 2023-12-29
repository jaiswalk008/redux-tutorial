// import {createStore} from 'redux';
import { configureStore} from '@reduxjs/toolkit'
import cartSlice from './cart';

//creates a store by merging all the reducers
export const store = configureStore({
    reducer : {
        cart:cartSlice.reducer,
    }
})
export const cartActions = cartSlice.actions;

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

