import FlexContainer from '../Flex Container/FlexContiner';
import ColorButton from '../Color Buttons/ColorButton';
import classes from './Filter.module.css';
import Option from '../Options/Options';
import RangeInput from '../Range Input/RangeInput';

const buttonColors = [
  '#868E96',
  '#FA5252',
  '#E64980',
  '#BE4BDB',
  '#7950F2',
  '#4C6EF5',
  '#15AABF',
  '#12B886',
  '#40C057',
  '#82C91E',
  '#FAB005',
  '#FC7E14',
];

const options = [
  'Default',
  'Filled',
  'Light',
  'Outline',
  'Subtle',
  'Transparent',
  'White',
];

function Filter({
  onAddColor,
  onChangeOption,
  onChangeRange,
}) {
  function handleClickColor(btnColor) {
    onAddColor(btnColor);
  }

  function handleChange(color) {
    onChangeOption(color);
  }

  function handleChangeInput(range) {
    onChangeRange(range);
  }

  return (
    <FlexContainer className={classes.filterContainer}>
      <label> Variant</label>
      <div className={classes.options}>
        <select
          onChange={(e) => handleChange(e.target.value)}
        >
          {options.map((el, index) => {
            if (el === 'Filled') {
              return (
                <Option value={el} key={index} isSelected />
              );
            } else {
              return <Option value={el} key={index} />;
            }
          })}
        </select>
      </div>
      <label>Color</label>
      <div className={classes.colorButtons}>
        {buttonColors.map((el, index) => (
          <ColorButton
            btnColor={el}
            key={index}
            onClcikColor={handleClickColor}
          />
        ))}
      </div>
      <div className={classes.rangeContainer}>
        <label>Size</label>
        <RangeInput onChangeInput={handleChangeInput} />
        <label>Radius</label>
        <RangeInput onChangeInput={handleChangeInput} />
      </div>
    </FlexContainer>
  );
}
export default Filter;
