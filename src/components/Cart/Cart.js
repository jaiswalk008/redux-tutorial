import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';
const Cart = (props) => {
  const {showCart , cartItems} = useSelector(state => state.cart);
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
