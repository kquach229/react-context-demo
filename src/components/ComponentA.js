import React from 'react';
import { useContext } from 'react';
import { CounterContext } from '../contexts/CounterContext';

export const ComponentA = () => {
  // Extract the count from Counter Context to display
  const { count } = useContext(CounterContext);
  return (
    <div>
      <h3>Component A: {count}</h3>
    </div>
  )
}
