import classes from './CodeComponent.module.css';

function CodeComponent({ variant, color, size, radius }) {
  const colorAttribute =
    color && color !== 'hsl(224, 93%, 60%)'
      ? `color='${color}' `
      : '';

  const sizeAttribute =
    size && Number(size) !== 2 ? `size='${size}' ` : '';

  const radiusAttribute =
    radius && Number(radius) !== 2
      ? `radius='${radius}' `
      : '';

  let codeString = `<Button variant='${variant}' ${colorAttribute}${sizeAttribute}${radiusAttribute}>Button</Button>`;

  return (
    <div className={classes.codeContainer}>
      <p>{codeString}</p>
    </div>
  );
}

export default CodeComponent;

// let codeString = `<Button variant='${variant}' `;

// if (color && color !== '#4C6EF5')
//   codeString += `color='${color}' `;

// if (size && Number(size) !== 2)
//   codeString += `size='${size}' `;

// if (radius && Number(radius) !== 2)
//   codeString += `radius='${radius}' `;

// codeString += '>Button</Button>';
