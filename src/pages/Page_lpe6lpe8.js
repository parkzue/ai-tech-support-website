import React from 'react';
import lpe6lpe8_cover from '../images/lpe6lpe8.png';
import { BubbleChat } from 'flowise-embed-react'
import './Image.css';

const Page_lpe6lpe8 = () => {
    return (
        <div>
            <div className='description'>
                <h1>Placeholder Title Guide 1</h1>
                <p>
                    [placeholder description]
                </p>
            </div>
            <div className="cover-image">
                <img src={lpe6lpe8_cover} style={{ cursor: 'pointer', maxWidth: '100%' }} />
            </div>
            
            <BubbleChat chatflowid="2cfff132-9e17-4de2-888e-292c0b70c2e1" apiHost="https://ai-tech-support.onrender.com" />
        </div>

    );
};

export default Page_lpe6lpe8;