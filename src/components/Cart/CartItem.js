import classes from './CartItem.module.css';
import { useDispatch } from 'react-redux';
import {cartActions} from '../Store/store';
import axios from 'axios';
const CartItem = (props) => {
  let { title, quantity, price , id } = props.item;
  const dispatch = useDispatch();
  const changeQuantity = async (id , changeType) =>{
    
    try {
      if(changeType==='increase') {
        quantity++;
        dispatch(cartActions.increase(title));
      }
    else{
      if(quantity>0) {
        quantity--;
        dispatch(cartActions.decrease(title));
      }
    }
    if(quantity>0){
      const res = await axios.put(`https://ecommerce-18def-default-rtdb.firebaseio.com/cart/${id}.json`,{
      title:title, price:price, quantity:quantity});
      
    }
    else{
      await axios.delete(`https://ecommerce-18def-default-rtdb.firebaseio.com/cart/${id}.json`);
      console.log('delete');
    }
      // console.log(res.data);
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${(quantity*price).toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={() =>  changeQuantity(id,"decrease")}>-</button>
          <button onClick={() => changeQuantity(id,"increase")}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
