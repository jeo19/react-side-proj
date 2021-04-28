import React from 'react';
import { ThemeContext } from './theme-context';

const ThemeButton = () => (
  <ThemeContext.Consumer>
    {(color) => <button style={{ color: `${color}` }}>{color}</button>}
  </ThemeContext.Consumer>
);
export default ThemeButton;
