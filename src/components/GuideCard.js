import React from 'react';
import './GuideCard.css';

const GuideCard = ({ imageUrl, guideUrl, altText, onClick, onMouseEnter, onMouseLeave, selected }) => (
  <div
    className={selected ? 'guide-card selected' : 'guide-card'}
    onClick={() => onClick(guideUrl)}
    onMouseEnter={(event) => onMouseEnter(guideUrl, event)}
    onMouseLeave={onMouseLeave}
  >
    <img src={imageUrl} alt={altText} style={{ cursor: 'pointer', maxWidth: '100%' }} />
    {selected && (
      <div className="icon">
        <span>Chat with this guide: {altText}</span>
      </div>
    )}
  </div>
);

export default GuideCard;
