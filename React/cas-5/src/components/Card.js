import './Card.css';

function Card({ heading, description }) {
  return (
    <div className='card'>
      <div className='image'>
        <img
          src='https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg'
          alt=''
        />
      </div>
      <div>
        <h1>{heading}</h1>

        <h2>{description}</h2>
      </div>
    </div>
  );
}
export default Card;
