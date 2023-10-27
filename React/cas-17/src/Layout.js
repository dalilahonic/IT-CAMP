import Navbar from './Navbar';
import Sidebar from './Sidebar';

function Layout({ children, setPage }) {
  return (
    <>
      <Navbar setPage={setPage} />
      <div className='main'>
        <Sidebar />
        <div className='content'>{children}</div>
      </div>
    </>
  );
}

export default Layout;
