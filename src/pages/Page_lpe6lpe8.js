import React from 'react';
import lpe6lpe8_cover from '../images/lpe6lpe8.png';
import { BubbleChat } from 'flowise-embed-react'

const Page_lpe6lpe8 = () => {
    return (
        <div>
            <h1>Placeholder Text Guide 1</h1>
            <img src={lpe6lpe8_cover} style={{ cursor: 'pointer', maxWidth: '100%' }} />
            
            <BubbleChat chatflowid="2cfff132-9e17-4de2-888e-292c0b70c2e1" apiHost="https://ai-tech-support.onrender.com" />
        </div>

    );
};

export default Page_lpe6lpe8;