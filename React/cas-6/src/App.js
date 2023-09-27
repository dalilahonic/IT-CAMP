import './App.css';
import Card from './components/Card';

function App() {
  return (
    <>
      <div className='main'>
        <Card
          img='https://cdn-icons-png.flaticon.com/512/666/666201.png'
          text='2.7k'
          description='Downloads'
        />
        <Card
          img='https://icons.veryicon.com/png/o/miscellaneous/two-color-icon-library/user-286.png'
          text='1.3K'
          description='Users'
        />
        <Card
          img='https://w7.pngwing.com/pngs/117/752/png-transparent-computer-icons-user-icon-design-numerous-miscellaneous-logo-computer-wallpaper.png'
          text='74'
          description='Files'
        />
        <Card
          img='https://icons.veryicon.com/png/o/miscellaneous/two-color-icon-library/user-286.png'
          text='46'
          description='Places'
        />
      </div>
    </>
  );
}

export default App;
