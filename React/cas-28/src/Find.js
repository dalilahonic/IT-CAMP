import {
  memo,
  useCallback,
  useMemo,
  useState,
} from 'react';
import SearchItem from './SearchItem';

const obj = [
  { id: 1, value: 'my text 1' },
  { id: 1, value: 'my text 2' },
  { id: 1, value: 'my text 3' },
  { id: 1, value: 'my text 4' },
  { id: 1, value: 'my text 5' },
];

const myArrayWithZeros = Array.from(
  { length: 100 },
  (_, key) => 'p' + key
);

function Find() {
  const [search, setSearch] = useState('');

  console.log('find rerender', myArrayWithZeros);

  const filteredItems = useMemo(() => {
    return myArrayWithZeros.filter((item) =>
      item.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  const handleClick = useCallback((e) => {
    console.log(e.target.innerText);
  }, []);

  return (
    <div>
      <input
        type='text'
        name=''
        id=''
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {filteredItems.map((item, index) => (
        <SearchItem
          title={item}
          key={index}
          onClick={handleClick}
        />
      ))}
    </div>
  );
}

export default Find;
