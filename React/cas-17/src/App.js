import { useState } from 'react';
import About from './About';
import './App.css';
import Contact from './Contact';
import Home from './Home';
import Layout from './Layout';

function App() {
  const [page, setPage] = useState(0);

  return (
    <div>
      <Layout setPage={setPage}>
        {page === 0 && <Home />} {page === 1 && <About />}
        {page === 2 && <Contact />}
      </Layout>
    </div>
  );
}

export default App;
