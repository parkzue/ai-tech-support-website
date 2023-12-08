import React from 'react';
import image_url from '../images/lpe6flpe8f.png';
import { BubbleChat } from 'flowise-embed-react'
import './Image.css';

const Page_lpe6flpe8f = () => {
    return (
        <div>
            <div className='description'>
                <h1>Placeholder Title Guide 2</h1>
                <p>
                    [placeholder description]
                </p>
            </div>
            <div className="cover-image">
                <img src={image_url} style={{ cursor: 'pointer', maxWidth: '100%' }} />
            </div>

            <BubbleChat chatflowid="2cfff132-9e17-4de2-888e-292c0b70c2e1" apiHost="https://ai-tech-support.onrender.com" />
        </div>
    );
};

export default Page_lpe6flpe8f;