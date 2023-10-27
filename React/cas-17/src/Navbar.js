function Navbar({ setPage }) {
  return (
    <header>
      <div className='nav'>
        <div>
          <ul className='links'>
            <li>
              <a href='#' onClick={() => setPage(0)}>
                Home
              </a>
            </li>
            <li>
              <a href='#' onClick={() => setPage(2)}>
                Contact
              </a>
            </li>
            <li>
              <a href='#' onClick={() => setPage(1)}>
                About
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
