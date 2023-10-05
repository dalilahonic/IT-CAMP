function Button({
  btnColor,
  variant,
  sizeRange,
  radiusRange,
}) {
  let styleProperty;

  switch (variant) {
    case 'Outline':
      styleProperty = {
        border: `1px solid ${btnColor}`,
        color: btnColor,
        backgroundColor: 'white',
      };
      break;
    case 'Default':
      styleProperty = {
        backgroundColor: 'white',
        border: '1px solid grey',
        color: 'black',
      };
      break;
    case 'Filled':
      styleProperty = {
        backgroundColor: btnColor,
        border: 'none',
        outline: 'none',
        color: 'white',
      };
      break;
    case 'Light':
      styleProperty = { color: btnColor };
      break;
    case 'Subtle':
      styleProperty = {
        color: btnColor,
        backgroundColor: 'white',
      };
      break;
    case 'Transparent':
      styleProperty = {
        color: btnColor,
        backgroundColor: 'white',
      };
      break;
    case 'White':
      styleProperty = {
        border: 'none',
        color: btnColor,
        backgroundColor: 'white',
      };
      break;
    default:
      styleProperty = {};
  }

  let btnSize;

  if (Number(sizeRange) === 1) {
    btnSize = {
      width: '66px',
      height: '30px',
      fontSize: '14px',
    };
  } else if (Number(sizeRange) === 2) {
    btnSize = {
      width: '80px',
      height: '36px',
      fontSize: '16px',
    };
  } else if (Number(sizeRange) === 3) {
    btnSize = {
      width: '94px',
      height: '42px',
      fontSize: '18px',
    };
  } else if (Number(sizeRange) === 4) {
    btnSize = {
      width: '108px',
      height: '48px',
      fontSize: '20px',
    };
  } else if (Number(sizeRange) === 5) {
    btnSize = {
      width: '122px',
      height: '54px',
      fontSize: '22px',
    };
  }

  let radiusStyle;

  switch (Number(radiusRange)) {
    case 1:
      radiusStyle = { borderRadius: '2px' };
      break;
    case 2:
      radiusStyle = { borderRadius: '5px' };
      break;
    case 3:
      radiusStyle = { borderRadius: '8px' };
      break;
    case 4:
      radiusStyle = { borderRadius: '11px' };
      break;
    case 5:
      radiusStyle = { borderRadius: '14px' };
      break;
    default:
      radiusStyle = {};
  }
  return (
    <button
      style={{
        ...styleProperty,
        ...btnSize,
        ...radiusStyle,
      }}
    >
      Button
    </button>
  );
}

export default Button;
