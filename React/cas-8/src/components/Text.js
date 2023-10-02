// function Text({ type, text }) {
//   if (type === 'h1') {
//     return <h1 style={{ color: 'blue' }}>{text}</h1>;
//   } else if (type === 'h2') {
//     return <h2 style={{ color: 'red' }}>{text}</h2>;
//   }

function Text({ type, text, color, bold }) {
  function getTypeStyling() {
    switch (type) {
      case 'h1':
        return {
          fontSize: 44,
          lineHeight: 1.5,
        };
      case 'h2':
        return {
          fontSize: 33,
          lineHeight: 1.5,
        };
      case 'h3':
        return {
          fontSize: 25,
          lineHeight: 1.5,
        };
      case 'h4':
        return {
          fontSize: 20,
          lineHeight: 1.5,
        };
      default:
        return {
          fontSize: 20,
          lineHeight: 1.5,
          color: 'black',
        };
    }
  }

  let isBold = bold ? 'bold' : 'normal';

  return (
    <p
      style={{
        ...getTypeStyling(),
        color,
        fontWeight: isBold,
      }}
    >
      {text}
    </p>
  );
}
export default Text;
