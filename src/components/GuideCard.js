// components/GuideCard.js
import React from 'react';
import './GuideCard.css';

const GuideCard = ({ imageUrl, guideUrl, altText, onClick, onMouseEnter, onMouseLeave, selected }) => (
  <div
    onClick={() => onClick(guideUrl)}
    onMouseEnter={(event) => onMouseEnter(guideUrl, event)}
    onMouseLeave={onMouseLeave}
  >
    <img src={imageUrl} alt={altText} style={{ cursor: 'pointer', maxWidth: '100%' }} />
    {selected && (
      <div className="icon">
        <span>Selected URL: {guideUrl}</span>
      </div>
    )}
  </div>
);

export default GuideCard;

