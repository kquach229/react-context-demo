// Import the useState hook and createContext hook
import React, { useState, createContext } from 'react';

// Create and Export CounterContext so that useContext hook can use CounterContext
export const CounterContext = createContext();

const CounterContextProvider = (props) => {
// Declare the inital count and count setter
const [count, setCount] = useState(0);

// Increase Count handler
const increaseCount = () => {
  setCount(count + 1)
}

// Decrease count handler
const decreaseCount = () => {
  setCount(count - 1)
}

  return (
    // Pass in the handlers as well as count value into the value prop of  the provider
    // Pass in the children props that the provider wraps around
    <CounterContext.Provider value={{count, increaseCount, decreaseCount}}>
      {props.children}
    </CounterContext.Provider>
  )
}


// Export CounterContextProvider
export default CounterContextProvider;
