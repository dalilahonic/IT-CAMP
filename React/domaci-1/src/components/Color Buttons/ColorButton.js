import classes from './ColorButton.module.css';

function ColorButton({
  btnColor = 'hsl(228, 89%, 63%)',
  onClickColor,
}) {
  function handleClick() {
    onClickColor(btnColor);
  }

  return (
    <button
      className={classes.colorButton}
      style={{ backgroundColor: btnColor }}
      onClick={handleClick}
    />
  );
}

export default ColorButton;
