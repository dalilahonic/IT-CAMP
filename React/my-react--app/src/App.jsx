import { useEffect, useState } from 'react';
import CardComp from './components/Card';

const App = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch('https://dummyjson.com/posts')
      .then((res) => res.json())
      .then((data) => setData(data.posts));
  }, []);

  console.log(data);

  return (
    <div className='mainDiv'>
      <div>
        {data?.map((card, index) => {
          return (
            <CardComp
              title={card.title}
              key={index}
              content={card.body}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
