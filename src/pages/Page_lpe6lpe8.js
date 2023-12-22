import React from 'react';
import lpe6lpe8_cover from '../images/lpe6lpe8.png';
import { BubbleChat } from 'flowise-embed-react'
import './Page_chat.css';

const Page_lpe6lpe8 = () => {
    return (
        <div className='page'>
            <div className='overlay-lpe6'></div>
            <div className='description'>
                <h1>LPe6/LPe8 Laser Punch</h1>
                <p>
                    [Demo] User guide for LPe6/LPe8 Laser Punch.<br/> 
                    Open the chat to ask a question about the specific guide. 
                    AI will then be used go through the files and provide you with an answer. <br/>
                    If the generated answer does not satisfy, you may want to reformat the question or be more specific. <br/>
                    Chatbot can be reset with the "new chat" button (top right of the chat).
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