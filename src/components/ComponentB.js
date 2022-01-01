import React from 'react';
import { useContext } from 'react';
import { CounterContext } from '../contexts/CounterContext';

export const ComponentB = () => {
  // Extract the handlers from the Counter Context to update the count
  const { increaseCount, decreaseCount } = useContext(CounterContext);
  return (
    <div>
      <button onClick={increaseCount}>Increase Count</button>
      <button onClick={decreaseCount}>Decrease Count</button>
    </div>
  )
}
