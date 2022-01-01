import React from 'react';
import { useContext } from 'react';
import { CounterContext } from  '../contexts/CounterContext';

const MyCounter = () => {
  // Extract the handlers and count value from the Counter Context to update the count
  const { count, increaseCount, decreaseCount } = useContext(CounterContext);
  return (
    <div>
      <h3>Counter Component</h3>
      <p>Count is: {count}</p>
      <button onClick={increaseCount}>INCREASE</button>
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  )
}

export default MyCounter;
