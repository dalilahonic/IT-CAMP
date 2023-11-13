import { useState } from 'react';

function Search({ onFetch }) {
  const [minLength, setMinLength] = useState('');
  const [maxLength, setMaxLength] = useState('');

  function handleClick() {
    onFetch(minLength, maxLength);
  }
  return (
    <div>
      <input
        value={minLength}
        type='number'
        name='minLength'
        onChange={(e) => setMinLength(e.target.value)}
      />
      <input
        value={maxLength}
        type='number'
        name='maxLength'
        onChange={(e) => setMaxLength(e.target.value)}
      />
      <button onClick={() => handleClick()}>
        Fetch Data
      </button>
    </div>
  );
}

export default Search;
