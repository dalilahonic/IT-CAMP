import { useState } from 'react';
import Button from './components/Button/Button';
import Filter from './components/Filter/Filter';
import FlexContainer from './components/Flex Container/FlexContiner';

function App() {
  const [currentBtnColor, setCurrentBtnColor] =
    useState('#4C6EF5');
  const [options, setOptions] = useState('Filled');
  const [range, setRange] = useState(2);

  function handleAddColor(color) {
    setCurrentBtnColor(color);
  }

  function handleChangeOption(option) {
    setOptions(option);
  }

  function handleChangeRange(range) {
    setRange(range);
  }

  return (
    <FlexContainer className='main'>
      <Button
        btnColor={currentBtnColor}
        btnOption={options}
        range={range}
      />
      <Filter
        onChangeRange={handleChangeRange}
        onChangeOption={handleChangeOption}
        onAddColor={handleAddColor}
      />
    </FlexContainer>
  );
}

export default App;
