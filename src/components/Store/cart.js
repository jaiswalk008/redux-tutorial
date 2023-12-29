import { createSlice } from "@reduxjs/toolkit";

const initialCartState={
    showCart:false,
    cartItems:[],
}
const cartSlice = createSlice({
    name:'cart',
    initialState:initialCartState,
    reducers:{
        toggleCart(state){
            state.showCart = !state.showCart;
        },
        addItems(state , action){
            let itemAlreadyInCart = false;
            state.cartItems.forEach((element) =>{
                if(element.title===action.payload.title){
                    element.quantity+=1;
                    itemAlreadyInCart=true;
                }
            })
            if(!itemAlreadyInCart){
                state.cartItems.push({...action.payload, quantity:1});
            }
        },
        increase(state,action) {
            state.cartItems.forEach((element) =>{
                if(element.title===action.payload){
                    element.quantity+=1;
                    
                }
            })
        },
        decrease(state,action) {
            state.cartItems.forEach((element,index) =>{
                if(element.title===action.payload){
                    if(element.quantity===1){
                        state.cartItems.splice(index,1);
                    }
                    else {
                        element.quantity-=1;
                    }
                    
                }
            })
        }
    }
})
export default cartSlice;