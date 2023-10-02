import Random from './components/Random';
import Text from './components/Text';

function App() {
  return (
    <>
      <div className='main'>
        <Random />
        <Random />
        <Random />
        <Random />
        <Random />
        <Random />
        <Random />
        <Random />
        <Random />
      </div>
      <div className='main'>
        <Text
          type='h1'
          text='ovo je tekst'
          color='blue'
          bold={true}
        />
        <Text
          type='h2'
          text='ovo je isto tekst'
          color='red'
          bold={true}
        />
        <Text
          type='h3'
          text='ovo je isto tekst'
          color='blueviolet'
          bold={true}
        />
        <Text
          type='h4'
          text='ovo je isto tekst'
          color='green'
          bold={true}
        />
        <Text
          type='h1'
          text='zabava'
          color='orange'
          bold={false}
        />
      </div>
    </>
  );
}

export default App;
