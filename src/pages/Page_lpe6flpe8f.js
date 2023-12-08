import React from 'react';
import image_url from '../images/lpe6flpe8f.png';
import { BubbleChat } from 'flowise-embed-react'

const Page_lpe6flpe8f = () => {
    return (
        <div>
            <h1>Placeholder Text Guide 2</h1>
            <img src={image_url} style={{ cursor: 'pointer', maxWidth: '100%' }} />

            <BubbleChat chatflowid="2cfff132-9e17-4de2-888e-292c0b70c2e1" apiHost="https://ai-tech-support.onrender.com" />
        </div>
    );
};

export default Page_lpe6flpe8f;