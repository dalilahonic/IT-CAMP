import './App.css';
import List from './components/List';
import ImageCard from './components/ImageCard';
function App() {
  const listArr = [
    { num: '2700', type: 'Users' },
    { num: '1800', type: 'Subscribers' },
    { num: '35', type: 'Downloads' },
    { num: '4', type: 'Products' },
  ];

  const imageUrl =
    'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80';

  const objectsList = [
    {
      title: 'Nature Scene',
      url: '',
    },
    {
      title: 'Cityscape',
      url: '',
    },
    {
      title: 'Beach Sunset',
    },
    {
      title: 'Mountain View',
      url: imageUrl,
    },
    {
      title: 'Abstract Art',
      url: imageUrl,
    },
    {
      title: 'Wildlife',
      url: imageUrl,
    },
    {
      title: 'Space Exploration',
      url: imageUrl,
    },
    {
      title: 'Food Delight',
      url: imageUrl,
    },
    {
      title: 'Vintage Cars',
      url: imageUrl,
    },
    {
      title: 'Travel Adventure',
      url: imageUrl,
    },
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
      {/* <Search /> */}
      <div>
        {objectsList.map((item, index) => {
          return (
            <ImageCard
              url={item.url}
              text={item.title}
              key={index}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
