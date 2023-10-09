import classes from './List.module.css';

function List({ num, type }) {
  // let styles;

  // if (Number(parseFloat(num)) > 0 && num <= 1000) {
  //   styles = { color: 'red' };
  // } else if (Number(parseFloat(num)) > 1000 && num < 2000) {
  //   styles = {
  //     color: 'violet',
  //   };
  // } else if (Number(parseFloat(num)) > 2000 && num < 3000) {
  //   styles = {
  //     color: 'blue',
  //   };
  // } else if (Number(parseFloat(num)) > 3000 && num < 4000) {
  //   styles = {
  //     color: 'violet',
  //   };
  // } else {
  //   styles = { color: 'grey' };
  // }

  function getColor() {
    switch (true) {
      case num < 1000:
        return 'red';
      case num < 2000:
        return 'blue';
      case num < 3000:
        return 'green';
      default:
        return 'violet';
    }
  }

  return (
    <div className={classes.container}>
      <h1 style={{ color: getColor() }}>{num}</h1>
      <p>{type}</p>
    </div>
  );
}

export default List;
