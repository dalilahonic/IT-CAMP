import classes from './CodeComponent.module.css';

function CodeComponent({ variant, color, size, radius }) {
  let codeString = `<Button variant='${variant}' `;

  if (color && color !== '#4C6EF5')
    codeString += `color='${color}' `;

  if (size && Number(size) !== 2)
    codeString += `size='${size}' `;

  if (radius && Number(radius) !== 2)
    codeString += `radius='${radius}' `;

  codeString += '>Button</Button>';

  return (
    <div className={classes.codeContainer}>
      <p>{codeString}</p>
    </div>
  );
}

export default CodeComponent;
