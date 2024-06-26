// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

/* OVERWRITE THE RESPECTIVE EXERCISE SOLUTIONS IN THIS FILE TO VIEW THE PAGE ON THE ABOVE ADDRESS*/
/* eg: COPY "01-exercise.js" FILE AND PASTE HERE TO LOAD ON THE ABOVE LOCALHOST ADDR */

import * as React from "react";

function countReducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + action.step };

    default:
      throw new Error(`Unsupportted action type: ${action.type}`);
  }
}

function Counter({ initialCount = 0, step = 1 }) {
  const [state, dispatch] = React.useReducer(countReducer, {
    count: initialCount,
  });

  const { count } = state;
  const increment = () => dispatch({ type: "INCREMENT", step });

  return <button onClick={increment}>{count}</button>;
}

function App() {
  return <Counter />;
}

export default App;
