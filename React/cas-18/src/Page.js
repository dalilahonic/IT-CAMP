import './Page.css';
import Image from './Image';
import Profile from './Profile';
import ProfileText from './ProfileText';

const Page = () => {
  return (
    <div>
      <Image />
      <div
        className='content'
        style={{
          display: 'flex',
          gap: '100px',
          alignItems: 'center',
          width: '60%',
          marginLeft: '300px',
          marginTop: '100px',
        }}
      >
        <Profile />
        <ProfileText />
      </div>
    </div>
  );
};
export default Page;
