import { useSelector , useDispatch} from 'react-redux';
// Note: useSelector provides a selective access to the store while useStore provides direct access
import classes from './Counter.module.css';
import { counterActions } from './Store/store';

const Counter = () => {
  const {counter , showCounter} = useSelector(state => state.counter);
  // const showCounter = useSelector(state => state.showCounter);
  console.log(counter)
  const dispatch  = useDispatch();
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter())
    //default counterActions create a unique identifier for the "increment identifier"
    //default structure from reduxtoolkit = {type:SOME_UNIQUE_IDENTIFIER , payload:value}
  };
  
  // console.log(counter)
  // takes the state as an input, useSelector automatically subscribe to the store
  // and if the counter component unmounts, it removes the subscription
  const increment = () => dispatch(counterActions.increment());
  const decrement = () => dispatch(counterActions.decrement());
  const incrementBy5 = () => dispatch(counterActions.incrementByValue(5));
  const decrementBy5 = () => dispatch(counterActions.decrementByValue(5));
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
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
