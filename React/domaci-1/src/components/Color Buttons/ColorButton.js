import classes from './ColorButton.module.css';
function ColorButton({ btnColor, onClcikColor }) {
  return (
    <button
      className={classes.colorButton}
      style={{ backgroundColor: btnColor }}
      onClick={() => onClcikColor(btnColor)}
    />
  );
}

export default ColorButton;
