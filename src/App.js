import React, { useState } from 'react';
import lpe6lpe8_cover from './images/lpe6lpe8.png';
import lpe6flpe8f_cover from './images/lpe6flpe8f.png';
import combigenius_cover from './images/combigenius.png';
import GuideCard from './components/GuideCard';

const App = () => {
  const [selectedGuide, setSelectedGuide] = useState(null);

  const handleImageClick = (url) => {
    window.location.href = url;
  };

  const handleImageMouseEnter = (url, event) => {
    setSelectedGuide(url);
  };

  const handleImageMouseLeave = () => {
    setSelectedGuide(null);
  };

  return (
    <div>
      <h1>Available User Guides</h1>
      <div style={{ display: 'flex', justifyContent: 'space-around', position: 'relative' }}>
        <GuideCard
          imageUrl={lpe6lpe8_cover}
          guideUrl="https://example.com"
          altText="lpe6lpe8"
          onClick={handleImageClick}
          onMouseEnter={handleImageMouseEnter}
          onMouseLeave={handleImageMouseLeave}
          selected={selectedGuide === 'https://example.com'}
        />
        <GuideCard
          imageUrl={lpe6flpe8f_cover}
          guideUrl="https://example.net"
          altText="lpe6flpe8f"
          onClick={handleImageClick}
          onMouseEnter={handleImageMouseEnter}
          onMouseLeave={handleImageMouseLeave}
          selected={selectedGuide === 'https://example.net'}
        />
        <GuideCard
          imageUrl={combigenius_cover}
          guideUrl="https://example.org"
          altText="combigenius"
          onClick={handleImageClick}
          onMouseEnter={handleImageMouseEnter}
          onMouseLeave={handleImageMouseLeave}
          selected={selectedGuide === 'https://example.org'}
        />
      </div>
    </div>
  );
};

export default App;