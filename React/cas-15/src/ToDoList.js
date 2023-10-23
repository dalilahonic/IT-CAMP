import List from './List';
import './ToDoList.css';
import { useState } from 'react';

function ToDoList() {
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState('');

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  function handleClick() {
    setData((prev) => [
      ...prev,
      { title: inputValue, isFinished: false },
    ]);
    setInputValue('');
  }

  function handleFinish(index) {
    setData((prev) => {
      const updatedData = [...prev];
      updatedData[index] = {
        ...updatedData[index],
        isFinished: !updatedData[index].isFinished,
      };

      return updatedData;
    });
  }

  function handleClose(i) {
    setData((prev) => {
      const newData = [...prev];
      newData.splice(i, 1);
      return newData;
    });
  }

  return (
    <>
      <div id='myDIV' class='header'>
        <h2>My To Do List</h2>
        <input
          value={inputValue}
          onChange={(e) => handleChange(e)}
          type='text'
          id='myInput'
          placeholder='Title...'
        />
        <span class='addBtn' onClick={() => handleClick()}>
          Add
        </span>
      </div>
      <div>
        <List
          onClose={handleClose}
          onFinish={handleFinish}
          data={data}
        />
      </div>
    </>
  );
}
export default ToDoList;
