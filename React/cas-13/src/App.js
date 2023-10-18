import './App.css';
import Active from './Active';
import { useState } from 'react';

function App() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleParagraphClick = (index) => {
    setActiveIndex(index);
  };

  const paragraphs = [0, 1, 2, 3];

  return (
    <div>
      {paragraphs.map((el, index) => {
        return (
          <Active
            key={index}
            isActive={activeIndex === index}
            onClick={() => handleParagraphClick(el)}
          ></Active>
        );
      })}
    </div>
  );
}

export default App;
