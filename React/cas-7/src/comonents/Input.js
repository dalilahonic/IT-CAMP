
function Input({
  type,
  className,
  style,
  placeholder,
  ...other
}) {
  return (
    <>
      <input
        type={type}
        style={style}
        className={className}
        placeholder={placeholder}
        {...other}
      />
    </>
  );
}

export default Input;
