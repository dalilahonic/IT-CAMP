import './List.css';

function List({ data, onFinish }) {
  function handleClick(i) {
    onFinish(i);
  }

  console.log(data);

  return (
    <ul>
      {data.map((el, i) => {
        return (
          <li
            onClick={() => handleClick(i)}
            style={
              el.isFinished
                ? {
                    backgroundColor: '#888',
                    color: '#fff',
                    textDecoration: 'line-through',
                  }
                : {}
            }
            key={i}
          >
            {el.title}
            <button  className='close'>X</button>
          </li>
        );
      })}
    </ul>
  );
}

export default List;
