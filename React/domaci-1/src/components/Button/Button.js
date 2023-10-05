function Button({ color, variant, size, radius }) {
  let variantStyles = {
    Outline: {
      border: `1px solid ${color}`,
      color: color,
      backgroundColor: 'white',
    },
    Default: {
      backgroundColor: 'white',
      border: '1px solid grey',
      color: 'black',
    },
    Filled: {
      backgroundColor: color,
      border: 'none',
      outline: 'none',
      color: 'white',
    },
    Light: { color: color },
    Subtle: {
      color: color,
      backgroundColor: 'white',
      border: 'none',
    },
    Transparent: {
      color: color,
      backgroundColor: 'white',
      border: 'none',
    },
    White: {
      border: 'none',
      color: color,
      backgroundColor: 'white',
    },
  };

  let styleProperty = variantStyles[variant];

  function getBtnSize(size) {
    const widths = [null, 66, 80, 94, 108, 122];
    const heights = [null, 30, 36, 42, 48, 54];
    const defaultWidth = 80;
    const defaultHeight = 36;

    return {
      width:
        `${widths[Number(size)]}px` || `${defaultWidth}px`,
      height:
        `${heights[Number(size)]}px` ||
        `${defaultHeight}px`,
      fontSize: `${Number(size) * 2 + 12}px` || '16px',
    };
  }

  // function getRadius(radius) {
  //   const radiusValues = [null, 2, 5, 8, 11, 14];
  //   const defaultRadius = 5;

  //   return {
  //     borderRadius:
  //       `${radiusValues[Number(radius)]}px` ||
  //       `${defaultRadius}px`,
  //   };
  // }

  function getRadius(radius) {
    return {
      borderRadius: `${2 + (radius - 1) * 3}px` || '5px',
    };
  }

  let styles = {
    ...styleProperty,
    ...getBtnSize(size),
    ...getRadius(radius),
  };

  return <button style={styles}>Button</button>;
}

export default Button;

// switch (variant) {
//   case 'Outline':
//     styleProperty = {
//       border: `1px solid ${color}`,
//       color: color,
//       backgroundColor: 'white',
//     };
//     break;
//   case 'Default':
//     styleProperty = {
//       backgroundColor: 'white',
//       border: '1px solid grey',
//       color: 'black',
//     };
//     break;
//   case 'Filled':
//     styleProperty = {
//       backgroundColor: color,
//       border: 'none',
//       outline: 'none',
//       color: 'white',
//     };
//     break;
//   case 'Light':
//     styleProperty = { color: color };
//     break;
//   case 'Subtle':
//     styleProperty = {
//       color: color,
//       backgroundColor: 'white',
//       border: 'none',
//     };
//     break;
//   case 'Transparent':
//     styleProperty = {
//       color: color,
//       backgroundColor: 'white',
//       border: 'none',
//     };
//     break;
//   case 'White':
//     styleProperty = {
//       border: 'none',
//       color: color,
//       backgroundColor: 'white',
//     };
//     break;
//   default:
//     styleProperty = {};
// }

//.......................................

// let btnSize;

// switch (Number(btnSize)) {
//   case 1:
//     btnSize = {
//       width: '66px',
//       height: '30px',
//       fontSize: '14px',
//     };
//     break;
//   case 2:
//     btnSize = {
//       width: '80px',
//       height: '36px',
//       fontSize: '16px',
//     };
//     break;
//   case 3:
//     btnSize = {
//       width: '94px',
//       height: '42px',
//       fontSize: '18px',
//     };
//     break;
//   case 4:
//     btnSize = {
//       width: '108px',
//       height: '48px',
//       fontSize: '20px',
//     };
//     break;
//   case 5:
//     btnSize = {
//       width: '122px',
//       height: '54px',
//       fontSize: '22px',
//     };
//     break;
//   default:
//     btnSize = {
//       width: '80px',
//       height: '36px',
//       fontSize: '16px',
//     };
// }

//............................................

// let radiusStyle;

// switch (Number(radius)) {
//   case 1:
//     radiusStyle = { borderRadius: '2px' };
//     break;
//   case 2:
//     radiusStyle = { borderRadius: '5px' };
//     break;
//   case 3:
//     radiusStyle = { borderRadius: '8px' };
//     break;
//   case 4:
//     radiusStyle = { borderRadius: '11px' };
//     break;
//   case 5:
//     radiusStyle = { borderRadius: '14px' };
//     break;
//   default:
//     radiusStyle = radiusStyle = { borderRadius: '5px' };
// }
