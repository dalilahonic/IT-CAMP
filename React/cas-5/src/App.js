import './App.css';
import Main from './components/Main';
import Card from './components/Card';

const data = [
  {
    heading: 'Holden Caulfield',
    description: 'UI Designer',
  },
  { heading: 'Henry Letham', description: 'CTO' },
  { heading: 'Oskar Blinde', description: 'Founder' },
  { heading: 'John Doe', description: 'DevOps' },
  {
    heading: 'Martin Eden',
    description: 'Software Engineer',
  },
  { heading: 'Boris Kitua', description: 'UX Researcher' },
  { heading: 'Atticus Finch', description: 'QA Engineer' },
  { heading: 'Alper Kamu', description: 'System' },
  {
    heading: 'Rodrigo Monchi',
    description: 'Product Manager',
  },
];

function App() {
  return (
    <>
      <Main />
      <div className='cardContainer'>
        {data.map((el) => (
          <Card
            heading={el.heading}
            description={el.description}
          />
        ))}
      </div>
    </>
  );
}

export default App;
