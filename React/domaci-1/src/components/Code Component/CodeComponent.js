import classes from './CodeComponent.module.css';

function CodeComponent({ variant, color, size, radius }) {
  let codeString = `<Button variant='${variant}'`;

  if (color) codeString += `color=${color}`;

  if (size) codeString += `size=${size}`;

  if (radius) codeString += `radius: ${radius}`;

  codeString += '>Button</Button>';

  return (
    <div className={classes.codeContainer}>
      <p>{codeString}</p>
    </div>
  );
}

export default CodeComponent;
