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
            btnColor={currentBtnColor}
            variant={variant}
            sizeRange={sizeRange}
            radiusRange={radiusRange}
          />
        </FlexContainer>
        <Filter
          onChangeRange={handleChangeRange}
          onChangeOption={handleChangeOption}
          onAddColor={handleAddColor}
        />
        <CodeComponent variant={variant} />
      </FlexContainer>
    </>
  );
}

export default App;
