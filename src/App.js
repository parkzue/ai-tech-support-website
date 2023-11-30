import React, { useState } from 'react';
import lpe6lpe8_cover from './images/lpe6lpe8.png';
import lpe6flpe8f_cover from './images/lpe6flpe8f.png';
import combigenius_cover from './images/combigenius.png';
//import GuideCard from './components/GuideCard';
//import Chatbot from "https://cdn.jsdelivr.net/npm/flowise-embed/dist/web.js"

const App = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (url) => {
    window.location.href = url;
  };

  const handleImageMouseEnter = (url, event) => {
    setSelectedImage(url);
  };

  const handleImageMouseLeave = () => {
    setSelectedImage(null);
  };

  const renderIcon = (url) => {
    const guide = document.getElementById(url);
    if (!guide) return null;

    const rect = guide.getBoundingClientRect();
    const iconStyle = {
      position: 'absolute',
      top: `${rect.top + rect.height / 2}px`,
      left: `${rect.left + rect.width / 2}px`,
      transform: 'translate(-50%, -50%)',
      background: 'rgba(255, 255, 255, 0.9)',
      padding: '5px',
      borderRadius: '5px',
      boxShadow: '0 0 5px rgba(0, 0, 0, 0.3)',
      zIndex: 1,
    };

    return (
      <div style={iconStyle}>
        <span>Chat with this guide</span>
      </div>
    );
  };

  return (
    <div>
      <h1>User Guides</h1>
      <div style={{ display: 'flex', justifyContent: 'space-around', position: 'relative' }}>
        <div
          id="https://example.com"
          onClick={() => handleImageClick('https://example.com')}
          onMouseEnter={(event) => handleImageMouseEnter('https://example.com', event)}
          onMouseLeave={handleImageMouseLeave}
        >
          <img src={lpe6lpe8_cover} alt="Guide 1" style={{ cursor: 'pointer', maxWidth: '100%' }} />
          {selectedImage === 'https://example.com' && renderIcon('https://example.com')}
        </div>
        <div
          id="https://google.com"
          onClick={() => handleImageClick('https://google.com')}
          onMouseEnter={(event) => handleImageMouseEnter('https://google.com', event)}
          onMouseLeave={handleImageMouseLeave}
        >
          <img src={lpe6flpe8f_cover} alt="Guide 2" style={{ cursor: 'pointer', maxWidth: '100%' }} />
          {selectedImage === 'https://google.com' && renderIcon('https://google.com')}
        </div>
        <div
          id="https://github.com"
          onClick={() => handleImageClick('https://github.com')}
          onMouseEnter={(event) => handleImageMouseEnter('https://github.com', event)}
          onMouseLeave={handleImageMouseLeave}
        >
          <img src={combigenius_cover} alt="Guide 3" style={{ cursor: 'pointer', maxWidth: '100%' }} />
          {selectedImage === 'https://github.com' && renderIcon('https://github.com')}
        </div>
      </div>
    </div>
  );
};

export default App;