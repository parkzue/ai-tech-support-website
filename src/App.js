import React from 'react';
import lpe6lpe8_cover from './images/lpe6lpe8.png';
import lpe6flpe8f_cover from './images/lpe6flpe8f.png';
import combigenius_cover from './images/combigenius.png';

const App = () => {
  const handleImageClick = (url) => {
    window.location.href = url;
  };

  return (
    <div>
      <h1>Placeholder Title</h1>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <div onClick={() => handleImageClick('https://example.com')}>
          <img src={lpe6lpe8_cover} alt="Guide 1" style={{ cursor: 'pointer', maxWidth: '100%' }} />
        </div>
        <div onClick={() => handleImageClick('https://example.com')}>
          <img src={lpe6flpe8f_cover} alt="Guide 2" style={{ cursor: 'pointer', maxWidth: '100%' }} />
        </div>
        <div onClick={() => handleImageClick('https://example.com')}>
          <img src={combigenius_cover} alt="Guide 3" style={{ cursor: 'pointer', maxWidth: '100%' }} />
        </div>
      </div>
    </div>
  );
};

export default App;
