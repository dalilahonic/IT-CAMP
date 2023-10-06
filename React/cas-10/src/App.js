import './App.css';
import List from './components/List';
import Search from './components/Search';
function App() {
  const listArr = [
    { num: '2.7k', type: 'Users' },
    { num: '1.8k', type: 'Subscribers' },
    { num: '35', type: 'Downloads' },
    { num: '4', type: 'Products' },
  ];
  return (
    <>
      <div className='main'>
        {listArr.map((el, index) => {
          return (
            <List num={el.num} type={el.type} key={index} />
          );
        })}
      </div>
      <Search />
    </>
  );
}

export default App;
