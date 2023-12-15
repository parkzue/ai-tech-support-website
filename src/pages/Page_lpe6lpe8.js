import React from 'react';
import lpe6lpe8_cover from '../images/lpe6lpe8.png';
import { BubbleChat } from 'flowise-embed-react'
import './Image.css';

const Page_lpe6lpe8 = () => {
    return (
        <div>
            <div className='description'>
                <h1>LPe6/LPe8 Laser Punch</h1>
                <p>
                    [placeholder description]
                </p>
            </div>
            <div className="cover-image">
                <img src={lpe6lpe8_cover} style={{ cursor: 'pointer', maxWidth: '100%' }} />
            </div>
            
            <BubbleChat chatflowid="fedf0d10-69ba-431e-9feb-e894b28a0c3a" apiHost="https://ai-tech-support.onrender.com" />
        </div>

    );
};

export default Page_lpe6lpe8;