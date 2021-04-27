import React, { useState } from 'react';

const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <p>
        The current couter value is <b>{counter}</b>
      </p>
      <button onClick={() => setCounter(counter + 1)}>add 1+</button>
      <button onClick={() => setCounter(counter - 1)}>del 1-</button>
    </div>
  );
};
export default Counter;
