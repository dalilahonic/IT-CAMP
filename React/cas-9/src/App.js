import './App.css';
import Wrapper from './components/Wrapper';

function App() {
  return (
    <>
      <Wrapper
        title='ovo je title'
        subtitle='ovo je subtitle'
      >
        <p>neki tekst</p>
      </Wrapper>
      <Wrapper title='drugi title'></Wrapper>
    </>
  );
}

export default App;
