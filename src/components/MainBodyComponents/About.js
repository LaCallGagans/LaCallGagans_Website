import React, { useState } from 'react';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';

const About = () => {
  const [showHeader, setShowHeader] = useState(true);

  useScrollPosition(({ prevPos, currPos }) => {
    const isVisible = currPos.y > prevPos.y;
    setShowHeader(isVisible);
  }, []);

  return (
    <header style={{ display: showHeader ? 'block' : 'none' }}>
      <ul className='flex'>
        <li className='text-4'>aaaaaaaaa</li>
        <li className='text-4'>aaaaaaaaa</li>
        <li className='text-4'>aaaaaaaaa</li>
        <li className='text-4'>aaaaaaaaa</li>
      </ul>
    </header>
  );
};

const App = () => {
  return (
    <div>
      <About />
      <div className='h-screen bg-black'></div>
    </div>
  );
};

export default App;
