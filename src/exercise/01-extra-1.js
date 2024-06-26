// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from "react";

function countReducer(prevCount, step) {
  return prevCount + step;
}

function Counter({ initialCount = 0, step = 2 }) {
  const [count, changeCount] = React.useReducer(countReducer, initialCount);
  const increment = () => changeCount(step);

  return <button onClick={increment}>{count}</button>;
}

function App() {
  return <Counter />;
}

export default App;
