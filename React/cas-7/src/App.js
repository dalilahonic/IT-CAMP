import './App.css';
import Button from './comonents/Button';
import Input from './comonents/Input';

function App() {
  return (
    <>
      <Button
        onPress={() => console.log('funckcija')}
        classTitle='buttonCls'
      />
      <Button text='clicked' />
      <Input
        className='input'
        type='text'
        placeholder='unesite tekst'
      />
    </>
  );
}

export default App;
