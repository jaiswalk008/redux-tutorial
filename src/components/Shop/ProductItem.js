import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { useDispatch ,useSelector} from 'react-redux';
import { addToCartHandler } from '../Store/cart';
const ProductItem =  (props) => {
  const { title, price, description } = props;
  const dispatch = useDispatch();
  const {cartItems} = useSelector(state => state.cart);

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={() =>dispatch( addToCartHandler(props,cartItems))}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
