import classes from './Button.module.css';
import FlexContainer from '../Flex Container/FlexContiner';

function Button({ btnColor, btnOption, range }) {
  let styleProperty;

  switch (btnOption) {
    case 'Outline':
      styleProperty = {
        border: `1px solid ${btnColor}`,
        color: btnColor,
        backgroundColor: 'white',
      };
      break;
    case 'Filled':
      styleProperty = { backgroundColor: btnColor };
      break;
    case 'Light':
      styleProperty = { color: btnColor };
      break;
    case 'Subtle':
    case 'Transparent':
    case 'White':
      styleProperty = { border: 'none', color: btnColor };
      break;
    default:
      styleProperty = {}; // Default style for unrecognized options
  }

  let btnSize;

  if (range === '1') {
    btnSize = { width: '66px', height: '30px' };
  } else if (range === '2') {
    btnSize = { width: '80px', height: '36px' };
  } else if (range === '3') {
    btnSize = {width: '100px', }
  }
  return (
    <FlexContainer className={classes.buttonContainer}>
      <button style={{...styleProperty, ...btnSize}}>Button</button>
    </FlexContainer>
  );
}

export default Button;
