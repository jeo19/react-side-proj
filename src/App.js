import React from 'react';
import { ThemeContext } from './theme-context';
import ThemeButton from './ThemeButton';

function App() {
  return (
    <ThemeContext.Provider value="blue">
      <ThemeButton />
    </ThemeContext.Provider>
  );
}

export default App;
