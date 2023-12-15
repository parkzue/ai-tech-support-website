import React from 'react';
import image_url from '../images/lpe6flpe8f.png';
import { BubbleChat } from 'flowise-embed-react'
import './Image.css';

const Page_lpe6flpe8f = () => {
    return (
        <div>
            <div className='description'>
                <h1>LPe6f/LPe8f Laser Punch</h1>
                <p>
                    [placeholder description]
                </p>
            </div>
            <div className="cover-image">
                <img src={image_url} style={{ cursor: 'pointer', maxWidth: '100%' }} />
            </div>

            <BubbleChat chatflowid="80fe60e6-cb69-4575-b176-ad6d2c5c260e" apiHost="https://ai-tech-support.onrender.com" />
        </div>
    );
};

export default Page_lpe6flpe8f;