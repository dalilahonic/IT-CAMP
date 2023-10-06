import classes from './List.module.css';

function List({ num, type }) {
  return (
    <div className={classes.container}>
      <h1>{num}</h1>
      <p>{type}</p>
    </div>
  );
}

export default List;
