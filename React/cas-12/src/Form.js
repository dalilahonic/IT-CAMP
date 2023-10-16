import { useState } from 'react';

function Form() {
  const [formValues, setFormValues] = useState({
    input1: '',
    input2: '',
    input3: '',
  });

  function handleOne(value) {
    setFormValues((prev) => ({ ...prev, input1: value }));
  }
  function handleTwo(value) {
    setFormValues((prev) => ({ ...prev, input2: value }));
  }
  function handleThree(value) {
    setFormValues((prev) => ({ ...prev, input3: value }));
  }

  console.log(formValues.input1);
  console.log(formValues.input2);
  console.log(formValues.input3);

  return (
    <form>
      <input
        onChange={(e) => handleOne(e.target.value)}
        value={formValues.input1}
      />
      <input
        onChange={(e) => handleTwo(e.target.value)}
        value={formValues.input2}
      ></input>
      <input
        onChange={(e) => handleThree(e.target.value)}
        value={formValues.input3}
      ></input>
    </form>
  );
}

export default Form;
