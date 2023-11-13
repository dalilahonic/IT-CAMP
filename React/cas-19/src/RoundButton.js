const RoundButton = ({ color, onChangeColor }) => {
    return (
    <div
      style={{
        width: 25,
        height: 25,
        borderRadius: 15,
        background: color,
        border: '1px solid black',
        cursor: 'pointer',
      }}
      onClick={() => onChangeColor(color)}
    ></div>
  );
};

export default RoundButton;
