import Button from './Button';
import RoundButton from './RoundButton';
import Select from './Select';

import Text from './Text';
import Rating from './Rating';

import { useState } from 'react';

const ProductCard = ({ data }) => {
  const [imgUrl, setImgUrl] = useState('');
  console.log(data);
  function handleChangeColor(color) {
    setImgUrl(color);
  }

  return (
    <div>
      <div>
        <img src={data.images[imgUrl]} alt='' />
      </div>
      <div>
        <Text type='t1' text={data.brandTitle} />
        <Text type='t2' text={data.descriptions} />
        <div>
          <Rating value={4} />
          <Text type='t3' text={data.reviews} data />
        </div>
        <Text type='t3' text={data.reviewCount} />

        <div>
          <Text type='t3' text='Color' />
          <RoundButton
            color='blue'
            onChangeColor={handleChangeColor}
          />
          <RoundButton
            color='black'
            onChangeColor={handleChangeColor}
          />

          <RoundButton
            color='white'
            onChangeColor={handleChangeColor}
          />
          <Text type='t3' text='Size' />
          <Select list={data.sizes} />
        </div>

        <div>
          <Text type='t4' text={data.price} />
          <Button title='Button' />
          <Button />
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
