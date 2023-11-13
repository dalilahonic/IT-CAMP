import Divider from './Divider';

function Profile() {
  return (
    <div
      className='profile'
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderRight: '1px solid gray',
        paddingRight: '100px',
        gap: '20px',
      }}
    >
      <img
        style={{
          height: '100px',
          width: '100px',
          objectFit: 'cover',
        }}
        src='https://cdn-icons-png.flaticon.com/512/149/149071.png'
        alt=''
      />
      <b style={{ marginTop: '10px' }}>Dalila Honic</b>
      <Divider />
      <p style={{ textAlign: 'center' }}>
        Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Sint, dignissimos possimus suscipit fugiat,
        voluptate eveniet sit amet delectus doloribus
        corporis quibusdam at fugit distinctio hic, sapiente
        nesciunt mollitia! Laborum, illo.
      </p>
    </div>
  );
}

export default Profile;
