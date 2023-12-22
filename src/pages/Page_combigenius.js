import React from 'react';
import image_url from '../images/combigenius.png';
import { BubbleChat } from 'flowise-embed-react'
import './Page_chat.css';

const Page_combigenius = () => {
    return (
        <div className='page'>
            <div className='description'>
                <h1>Combi Genius</h1>
                <p>
                    Note: Combi Genius guide is not available at the moment due to memory issues with specific guide.
                </p>
            </div>
            <div className="cover-image">
                <img src={image_url} style={{ cursor: 'pointer', maxWidth: '100%' }} />
            </div>

            <BubbleChat chatflowid="2cfff132-9e17-4de2-888e-292c0b70c2e1" apiHost="https://ai-tech-support.onrender.com" />
        </div>
    );
};

export default Page_combigenius;