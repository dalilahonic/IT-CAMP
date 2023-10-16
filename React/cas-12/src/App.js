import './App.css';
import Input from './Input';
import Form from './Form';
import ListManipulation from './ListManipulation';

function App() {
  // const [value, setValue] = useState('');

  // function handleChange(value) {
  //   setValue(value);
  // }

  return (
    <>
      {/* <input
        value={value}
        type='text'
        onChange={(e) => handleChange(e.target.value)}
      ></input> */}
      <form>
        <Input />
        <Input />
        <Input />
      </form>
      <Form />
      <ListManipulation />
    </>
  );
}

export default App;
