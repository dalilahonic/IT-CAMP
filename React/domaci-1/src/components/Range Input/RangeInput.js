import './RangeInput.module.css';

function RangeInput({ onChangeInput, className }) {
  function handleChange(range, inputClass) {
    onChangeInput(range, inputClass);
  }

  return (
    <input
      className={className}
      onChange={(e) =>
        handleChange(e.target.value, e.target.className)
      }
      type='range'
      step='-5'
      min='1'
      max='5'
      defaultValue='2'
    />
  );
}

export default RangeInput;
