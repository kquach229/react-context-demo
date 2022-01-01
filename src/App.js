import './App.css';
import { ComponentA } from './components/ComponentA';
import { ComponentB } from './components/ComponentB';
import MyCounter from './components/MyCounter';
import CounterContextProvider from './contexts/CounterContext';



function App() {
  return (
    // Wrap components that need counter elements in the counter provider
    <CounterContextProvider>
    <div className="App">
      <h2>Context Api</h2>
      <ComponentA />
      <ComponentB />
      <MyCounter />
    </div>
    </CounterContextProvider>
  );
}

export default App;
