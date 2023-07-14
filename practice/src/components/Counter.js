import { useDispatch, useSelector } from 'react-redux';
import './Counter.css'

const Counter = () => {

  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);

  const toggleCounterHandler = () => {};

  const incrementHandler = () =>{
    dispatch({type:'increment'})
  }

  const decrementHandler = () =>{
    dispatch({type:'decrement'})
  }

  return (
    <main className='counter'>
      <h1>Redux Counter</h1>
      <div className='value'>{counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;