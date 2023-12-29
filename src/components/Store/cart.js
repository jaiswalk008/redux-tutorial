import { createSlice } from "@reduxjs/toolkit";
import { uiActions ,cartActions } from "./store";
import axios from "axios";
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

//action creators returns a function that does some action
export const addToCartHandler = (data, cartItems) => {
    return async (dispatch) => {
      dispatch(uiActions.showNotification({
        status: "pending",
        title: "Sending",
        message: "Sending cart data!"
      }));
  
      const addToCart = async () =>{
          let itemAlreadyInCart = false;
          let item;
          cartItems.forEach((element) => {
            if (data.title === element.title) {
              itemAlreadyInCart = true;
              item = element;
            }
          });
          if (itemAlreadyInCart) {
            const { id, ...payload } = item;
            const res = await axios.put(`https://ecommerce-18def-default-rtdb.firebaseio.com/cart/${id}.json`, { ...payload, quantity: payload.quantity + 1 });
            
            dispatch(cartActions.increase(data.title));
            dispatch(uiActions.showNotification({
              status: "success",
              title: "Sent",
              message: "Sent cart data successfully!"
            }));
          } else {
            const res = await axios.post('https://ecommerce-18def-default-rtdb.firebaseio.com/cart.json', { ...data, quantity: 1 });
            
            dispatch(cartActions.addItems({ ...data, quantity: 1, id: res.data }));
            dispatch(uiActions.showNotification({
              status: "success",
              title: "Sent",
              message: "Sent cart data successfully!"
            }));
          }
      }
      
  
      try {
        await addToCart();
      } catch (err) {
        console.log(err);
        dispatch(uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Sending cart data failed!"
        }));
      }
    };
  };
  
export default cartSlice;