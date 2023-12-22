import React, { useState } from 'react';
import lpe6lpe8_cover from '../images/lpe6lpe8.png';
import lpe6flpe8f_cover from '../images/lpe6flpe8f.png';
import combigenius_cover from '../images/combigenius.png';
import GuideCard from '../components/GuideCard';
import { useNavigate } from 'react-router-dom';
import './Page_home.css'

const Home = () => {
    const [selectedGuide, setSelectedGuide] = useState(null);
    const navigate = useNavigate();

    const handleImageClick = (url) => {
        navigate('/' + url);
    };

    const handleImageMouseEnter = (url, event) => {
        setSelectedGuide(url);
    };

    const handleImageMouseLeave = () => {
        setSelectedGuide(null);
    };

    return (
        <div>
            <div className='body'>
                <div className='title'>
                    <h>Available User Guides</h>
                    <p>Select a guide to chat with</p>
                </div>
            </div>
            <div className='Guides'>
                <GuideCard
                    imageUrl={lpe6lpe8_cover}
                    guideUrl="lpe6lpe8"
                    altText="lpe6lpe8"
                    onClick={handleImageClick}
                    onMouseEnter={handleImageMouseEnter}
                    onMouseLeave={handleImageMouseLeave}
                    selected={selectedGuide === "lpe6lpe8"}
                />
                <GuideCard
                    imageUrl={lpe6flpe8f_cover}
                    guideUrl="lpe6flpe8f"
                    altText="lpe6flpe8f"
                    onClick={handleImageClick}
                    onMouseEnter={handleImageMouseEnter}
                    onMouseLeave={handleImageMouseLeave}
                    selected={selectedGuide === "lpe6flpe8f"}
                />
                <GuideCard
                    imageUrl={combigenius_cover}
                    guideUrl="combigenius"
                    altText="combigenius"
                    onClick={handleImageClick}
                    onMouseEnter={handleImageMouseEnter}
                    onMouseLeave={handleImageMouseLeave}
                    selected={selectedGuide === "combigenius"}
                />
            </div>
        </div>
    );
};

export default Home;
