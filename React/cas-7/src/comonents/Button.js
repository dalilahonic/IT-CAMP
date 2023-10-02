import classes from './Button.module.css';

function Button({
  text = 'Button',
  classTitle = '',
  onPress,
}) {
  return (
    <button
      onClick={onPress}
      className={`${classes.button} ${classTitle}`}
    >
      {text}
    </button>
  );
}

export default Button;
