import classes from './Card.module.css';

function Card({ text, description, img }) {
  return (
    <div className={classes.card}>
      <img src={img} alt='' />

      <h1>{text}</h1>
      <h3>{description}</h3>
    </div>
  );
}

export default Card;
