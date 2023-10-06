import { useState } from 'react';
import Button from './components/Button/Button';
import Filter from './components/Filter/Filter';
import FlexContainer from './components/Flex Container/FlexContiner';
import CodeComponent from './components/Code Component/CodeComponent';

function App() {
  const [currentBtnColor, setCurrentBtnColor] = useState(
    'hsl(228, 89%, 63%)'
  );
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
    </>
  );
}

export default App;
