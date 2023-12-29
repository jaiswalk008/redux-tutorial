import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { useDispatch ,useSelector} from 'react-redux';
import {cartActions} from '../Store/store';
import { uiActions } from '../Store/store';
import axios from 'axios';
const ProductItem =  (props) => {
  const { title, price, description } = props;
  const dispatch = useDispatch();
  const {cartItems} = useSelector(state => state.cart);

  const addToCartHandler =async (data) =>{
    dispatch(uiActions.showNotification({
      status:"pending",
      title:"Sending",
      message:"Sending cart data!"
    }));
    let itemAlreadyInCart = false;
    let item;
    cartItems.forEach((element) =>{
      if(data.title===element.title){
        itemAlreadyInCart=true;
        item=element;
        // console.log(item);
        
        console.log(item.quantity)
      }
    })
   try{
    if(itemAlreadyInCart){
      // item.quantity = item.quantity+1;
      const {id , ...payload} = item;
      // console.log(id,payload);
      const res = await axios.put(`https://ecommerce-18def-default-rtdb.firebaseio.com/cart/${id}.json`,{...payload , quantity:payload.quantity+1});
      // console.log(res.data);
      console.log('updating')
      dispatch(cartActions.addItems(data))
      dispatch(uiActions.showNotification({
        status:"success",
        title:"Sent",
        message:"sent cart data successfully!"
      }));
     }
      else {
        const res =await axios.post('https://ecommerce-18def-default-rtdb.firebaseio.com/cart.json',{...data,quantity:1})
        console.log(res.data);
        // console.log('adding')
  
        dispatch(cartActions.addItems({...data,quantity:1, id:res.data}));
        dispatch(uiActions.showNotification({
          status:"success",
          title:"Sent",
          message:"sent cart data successfully!"
        }));
      }
      
   }
   catch(err){
    console.log(err);
    dispatch(uiActions.showNotification({
      status:"error",
      title:"Error!",
      message:"Sending cart data failed!"
    }));
  }
    // if(!itemAlreadyInCart){
    //   cartItems.push({...action.payload, quantity:1});
    // }
    
  }
  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={() => addToCartHandler(props)}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
