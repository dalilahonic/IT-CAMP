import { Card } from 'antd';

function CardComp({ title, content }) {
  return (
    <div className='card'>
      <Card
        title={title}
        extra={<a href='#'>More</a>}
        style={{
          width: 300,
        }}
      >
        <p>{content}</p>
      </Card>
    </div>
  );
}

export default CardComp;
