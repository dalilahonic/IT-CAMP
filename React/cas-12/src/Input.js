import { useState } from 'react';

function Input() {
  const [value, setValue] = useState('');

  function handleChange(value) {
    setValue(value);
  }

  return (
    <input
      type='text'
      value={value}
      onChange={(e) => handleChange(e.target.value)}
    ></input>
  );
}

export default Input;
