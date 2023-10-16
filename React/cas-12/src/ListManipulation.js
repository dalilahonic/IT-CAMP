import { useState } from 'react';

function ListManipulation() {
  const [list, setList] = useState([1, 2]);
  function addP() {
    setList((prev) => [...prev, 'novi']);
  }

  function removeP() {
    setList((prev) => {
      //   prev.pop();
      //   return [...prev];

      const newList = prev.slice(0, -1);
      return newList;
    });
  }

  function removeElement(index) {
    setList((prev) => {
      let novi = [...prev];
      novi.splice(index, 1);
      return novi;
    });
  }

  return (
    <div>
      <button onClick={() => addP()}>Add</button>
      <button onClick={() => removeP()}>Remove</button>

      {list.map((el, index) => {
        return (
          <p
            onClick={() => removeElement(index)}
            key={index}
          >
            {el}
          </p>
        );
      })}
    </div>
  );
}

export default ListManipulation;
