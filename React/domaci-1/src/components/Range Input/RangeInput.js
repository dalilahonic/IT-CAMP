import './RangeInput.module.css';

function RangeInput({ onChangeInput }) {
  function handleChange(range) {
    onChangeInput(range);
  }

  return (
    <input
      onChange={(e) => handleChange(e.target.value)}
      type='range'
      step='-5'
      min='1'
      max='5'
      defaultValue='2'
    />
  );
}

export default RangeInput;
