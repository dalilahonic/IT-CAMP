import { useState } from 'react';

function Check() {
  const [check, setCheck] = useState(false);

  function handleClick() {
    setCheck((prev) => !prev);
  }

  return (
    <div>
      <label>Ovo je nesto</label>
      <input
        onChange={handleClick}
        type='checkbox'
        checked={check}
      ></input>
       <label>Ovo je drugp</label>
      <input
        onChange={handleClick}
        type='checkbox'
        checked={check}
      ></input>
       <label>Ovo je trece</label>
      <input
        onChange={handleClick}
        type='checkbox'
        checked={check}
      ></input>
    </div>
  );
}

export default Check;
