import { useState } from 'react';
import Button from './components/Button/Button';
import Filter from './components/Filter/Filter';
import FlexContainer from './components/Flex Container/FlexContiner';
import CodeComponent from './components/Code Component/CodeComponent';

function App() {
  const [currentBtnColor, setCurrentBtnColor] =
    useState('#4C6EF5');
  const [variant, setVariant] = useState('Filled');
  const [sizeRange, setSizeRange] = useState(2);
  const [radiusRange, setRadiusRange] = useState(2);

  function handleAddColor(color) {
    setCurrentBtnColor(color);
  }

  function handleChangeOption(variant) {
    setVariant(variant);
  }

  function handleChangeRange(range, inputClass) {
    inputClass === 'sizeRange'
      ? setSizeRange(range)
      : setRadiusRange(range);
  }

  return (
    <>
      <FlexContainer className='main'>
        <FlexContainer className='buttonContainer'>
          <Button
            color={currentBtnColor}
            variant={variant}
            size={sizeRange}
            radius={radiusRange}
          />
        </FlexContainer>
        <Filter
          onChangeRange={handleChangeRange}
          onChangeOption={handleChangeOption}
          onAddColor={handleAddColor}
        />
        <CodeComponent
          variant={variant}
          color={currentBtnColor}
          size={sizeRange}
          radius={radiusRange}
        />
      </FlexContainer>
      {/* <Button variant='Default'>Button</Button>
      <Button
        variant='Filled'
        color='#FA5252'
        size='2'
        radius='2'
      >
        Button
      </Button>
      <Button
        variant='Filled'
        color='#FAB005'
        size='5'
        radius='5'
      >
        Button
      </Button> */}
    </>
  );
}

export default App;
