import React, { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { value: state.value + 1 };
    case 'DECREMENT':
      return { value: state.value - 1 };
    default:
      return state;
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, { value: 0 });
  return (
    <div>
      <p>The current value is {state.value}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Add</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Del</button>
    </div>
  );
};
export default Counter;
