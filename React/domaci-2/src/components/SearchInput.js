import classes from './SearchInput.module.css';
import { useState } from 'react';

function SearchInput({ onChangeInput }) {
  const [inputValue, setInputValue] = useState('');

  function handleChange(value) {
    setInputValue(value);
    onChangeInput(value);
  }

  return (
    <input
      className={classes.input}
      value={inputValue}
      onChange={(e) => handleChange(e.target.value)}
    ></input>
  );
}

export default SearchInput;
