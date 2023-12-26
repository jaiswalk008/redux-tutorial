import { useSelector , useDispatch} from 'react-redux';
// Note: useSelector provides a selective access to the store while useStore provides direct access
import classes from './Counter.module.css';


const Counter = () => {
  const toggleCounterHandler = () => {};
  const counter = useSelector(state => state.counter);
  const dispatch  = useDispatch();
  // console.log(counter)
  // takes the state as an input, useSelector automatically subscribe to the store
  // and if the counter component unmounts, it removes the subscription
  const increment = () => dispatch({type:'Increment'});
  const decrement = () => dispatch({type:'Decrement'});
  const incrementBy5 = () => dispatch({type:'INCREMENTBY5'});
  const decrementBy5 = () => dispatch({type:'DECREMENTBY5'});
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={incrementBy5}>Increment By 5</button>
        <button onClick={decrementBy5}>Decrement By 5 </button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
