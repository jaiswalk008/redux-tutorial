import { createSlice } from "@reduxjs/toolkit";

const initialCartState={
    showCart:false,
    cartItems:[],
}
const cartSlice = createSlice({
    name:'cart',
    initialState:initialCartState,
    // NOTE: must not change state out of the reducer otherwise reducer will not about the change
    reducers:{
        toggleCart(state){
            state.showCart = !state.showCart;
        },
        setItem(state,action){
            state.cartItems = action.payload;
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
                state.cartItems.push(action.payload);
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