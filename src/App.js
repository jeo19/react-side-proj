import React, { useState } from 'react';
import Info from './Info';

function App() {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        {visible ? 'Hidden' : 'Visible'}
      </button>
      <hr />
      {visible && <Info />}
    </div>
  );
}

export default App;
