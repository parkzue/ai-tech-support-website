import React, { useState } from 'react';
import lpe6lpe8_cover from '../images/lpe6lpe8.png';
import lpe6flpe8f_cover from '../images/lpe6flpe8f.png';
import combigenius_cover from '../images/combigenius.png';
import GuideCard from '../components/GuideCard';
import {useLocation} from 'react-router-dom';

const Home = () => {
    const [selectedGuide, setSelectedGuide] = useState(null);
    const location = useLocation();
    var url_lpe6lpe8 = location.pathname + "lpe6lpe8";
    var url_lpe6flpe8f = location.pathname + "lpe6flpe8f";
    var url_combigenius = location.pathname + "combigenius";

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
        guideUrl={url_lpe6lpe8}
        altText="lpe6lpe8"
        onClick={handleImageClick}
        onMouseEnter={handleImageMouseEnter}
        onMouseLeave={handleImageMouseLeave}
        selected={selectedGuide === url_lpe6lpe8}
      />
      <GuideCard
        imageUrl={lpe6flpe8f_cover}
        guideUrl={url_lpe6flpe8f}
        altText="lpe6flpe8f"
        onClick={handleImageClick}
        onMouseEnter={handleImageMouseEnter}
        onMouseLeave={handleImageMouseLeave}
        selected={selectedGuide === url_lpe6flpe8f}
      />
      <GuideCard
        imageUrl={combigenius_cover}
        guideUrl={url_combigenius}
        altText="combigenius"
        onClick={handleImageClick}
        onMouseEnter={handleImageMouseEnter}
        onMouseLeave={handleImageMouseLeave}
        selected={selectedGuide === url_combigenius}
      />
    </div>
  </div>
  );
};

export default Home;
