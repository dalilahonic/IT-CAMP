import { useState } from 'react';

function SimpleForm() {
  const [data, setData] = useState({
    input1: '',
    input2: '',
    input3: '',
    input4: '',
  });

  const [error, setError] = useState({
    error1: false,
    error2: false,
    error3: false,
    error4: false,
  });

  function handleChange(e, input) {
    setData((prev) => {
      let newInput = { ...prev };
      newInput[input] = e.target.value;
      return newInput;
    });
  }

  function hanldeSubmit(e) {
    e.preventDefault();

    if (data.input1.length < 3) {
      setError((prev) => {
        let obj = { ...prev };
        obj.error1 = true;
        return obj;
      });
    }
  }

  return (
    <>
      <form onSubmit={hanldeSubmit}>
        <label>Name</label>
        <input
          value={data.input1}
          onChange={(e) => handleChange(e, 'input1')}
          type='text'
        ></input>
        {error.error1 && <p> nije dobro</p>}

        <label>Last Name</label>
        <input
          value={data.input2}
          onChange={(e) => handleChange(e, 'input2')}
          type='text'
        ></input>
         {error.error2 && <p> nije dobro</p>}
        <label>Email</label>
        <input
          value={data.input3}
          onChange={(e) => handleChange(e, 'input3')}
          type='text'
        ></input>
         {error.error3 && <p> nije dobro</p>}
        <label>Password</label>
        <input
          value={data.input4}
          onChange={(e) => handleChange(e, 'input4')}
          type='password'
        ></input>
         {error.error4 && <p> nije dobro</p>}
        <button onSubmit={() => hanldeSubmit}>
          {' '}
          Submit
        </button>
      </form>
    </>
  );
}

export default SimpleForm;
