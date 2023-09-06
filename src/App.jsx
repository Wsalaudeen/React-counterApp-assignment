import { useState } from 'react';
import './App.css';
import {
  ChevronDown,
  ChevronsDown,
  ChevronUp,
  ChevronsUp,
  Hash,
  RotateCcw,
} from 'react-feather';

function App() {
  const [count, setCount] = useState(0);
  const btnIncrement = () => {
    setCount((current) => (current += 1));
  };

  const btnDecrement = () => {
    if (count > 0) setCount((current) => (current -= 1));
  };
  const btnReset = () => {
    setCount((current) => (current = 0));
  };
  const btnRandom = () => {
    setCount((current) => (current = Math.floor(Math.random() * 100)));
  };

  const btnDecrementBy10 = () => {
    if (count > 10) {
      setCount((current) => (current -= 10));
    }
  };

  const btnIncrementBy10 = () => {
    setCount((current) => (current += 10));
  };
  return (
    <>
      <div className="container">
        <h3>Counter</h3>
        <h1>{count}</h1>
        <div className="buttons">
          <button onClick={btnIncrement}>
            <ChevronUp />
          </button>
          <button onClick={btnIncrementBy10}>
            <ChevronsUp />
          </button>
          <button onClick={btnReset}>
            <RotateCcw />
          </button>
          <button onClick={btnRandom}>
            <Hash />
          </button>
          <button onClick={btnDecrementBy10}>
            <ChevronsDown />
          </button>
          <button onClick={btnDecrement}>
            <ChevronDown />
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
