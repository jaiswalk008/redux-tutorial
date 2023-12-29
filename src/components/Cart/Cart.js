import { useCallback, useEffect } from 'react';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector , useDispatch } from 'react-redux';
import {cartActions} from '../Store/store';
import axios from 'axios';
const Cart = (props) => {
  const {showCart , cartItems} = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const fetchCart = useCallback(async () =>{
    try {
      const res = await axios.get('https://ecommerce-18def-default-rtdb.firebaseio.com/cart.json');
      // console.log(res);
      if(res.data){
        const keys = Object.keys(res.data);
        const cartItems = Object.values(res.data).map((element , index) =>{
          return {...element , id:keys[index]};
        })
        console.log(cartItems);
        dispatch(cartActions.setItem(cartItems))
      }
    }
    catch(err) {
      console.log(err);
    }
  } , [])
  useEffect(() =>{
    fetchCart();
  },[fetchCart])
  // console.log(showCart);
  return (
    showCart && (<Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.map((element) =>{
          return <CartItem key={element.title} item={element}/>
        })}
        
      </ul>
    </Card>)
  );
};

export default Cart;
