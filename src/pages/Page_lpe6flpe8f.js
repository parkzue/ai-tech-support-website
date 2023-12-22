import React from 'react';
import image_url from '../images/lpe6flpe8f.png';
import { BubbleChat } from 'flowise-embed-react'
import './Page_chat.css';

const Page_lpe6flpe8f = () => {
    return (
        <div className='page'>
            <div className='overlay-lpe6f'></div>
            <div className='description'>
                <h1>LPe6f/LPe8f Laser Punch</h1>
                <p>
                [Demo] User guide for LPe6f/LPe8f Laser Punch.<br/> 
                    Open the chat to ask a question about the specific guide. 
                    AI will then be used go through the files and provide you with an answer. <br/>
                    If the generated answer does not satisfy, you may want to reformat the question or be more specific. <br/>
                    Chatbot can be reset with the "new chat" button (top right of the chat).
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