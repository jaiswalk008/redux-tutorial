import classes from './CartButton.module.css';
import { useDispatch , useSelector} from 'react-redux';
import { cartActions } from '../Store/store';
const CartButton = (props) => {
  const dispatch = useDispatch();
  const {cartItems} = useSelector(state => state.cart);
  const showCartHandler = () =>{
    dispatch(cartActions.toggleCart());
  }
  return (
    <button onClick={showCartHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartItems.length}</span>
    </button>
  );
};

export default CartButton;
