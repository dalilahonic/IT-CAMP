import FlexContainer from '../Flex Container/FlexContiner';
import ColorButton from '../Color Buttons/ColorButton';
import Option from '../Options/Options';
import RangeInput from '../Range Input/RangeInput';
import classes from './Filter.module.css';

// const buttonColors = [
//   '#868E96',
//   '#FA5252',
//   '#E64980',
//   '#BE4BDB',
//   '#7950F2',
//   '#4C6EF5',
//   '#15AABF',
//   '#12B886',
//   '#40C057',
//   '#82C91E',
//   '#FAB005',
//   '#FC7E14',
// ];

const buttonColors = [
  'hsl(210, 7%, 56%)',
  'hsl(0, 94%, 65%)',
  'hsl(339, 76%, 59%)',
  'hsl(288, 67%, 58%)',
  'hsl(255, 86%, 63%)',
  'hsl(228, 89%, 63%)',
  ' hsl(187, 80%, 42%)',
  'hsl(162, 82%, 40%)',
  'hsl(131, 50%, 50%)',
  'hsl(85, 74%, 45%)',
  'hsl(42, 96%, 50%)',
  'hsl(27, 97%, 53%)',
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

  function handleChange(variant) {
    onChangeOption(variant);
  }

  function handleChangeInput(range, inputClass) {
    onChangeRange(range, inputClass);
  }

  return (
    <FlexContainer className={classes.filterContainer}>
      <label> Variant</label>
      <div className={classes.options}>
        <select
          onChange={(e) => handleChange(e.target.value)}
        >
          {options.map((el, index) => {
            return (
              <Option
                value={el}
                key={index}
                isSelected={el === 'Filled'}
              />
            );
          })}
        </select>
      </div>
      <label>Color</label>
      <div className={classes.colorButtons}>
        {buttonColors.map((el, index) => (
          <ColorButton
            btnColor={el}
            key={index}
            onClickColor={handleClickColor}
          />
        ))}
      </div>
      <div className={classes.rangeContainer}>
        <label>Size</label>
        <RangeInput
          className='sizeRange'
          onChangeInput={handleChangeInput}
        />
        <label>Radius</label>
        <RangeInput
          className='radiusRange'
          onChangeInput={handleChangeInput}
        />
      </div>
    </FlexContainer>
  );
}
export default Filter;

// {
//   /* {options.map((el, index) => {
//   if (el === 'Filled') {
//     return (
//       <Option value={el} key={index} isSelected />
//     );
//   } else {
//     return <Option value={el} key={index} />;
//   }
// })} */
// }
