import React from 'react';

const NFTCard = ({ imageSrc, title, description, price }) => {
  return (
    <div className="nft-card">
      <img src={imageSrc} alt={title} className="nft-card-image" />
      <div className="nft-card-content">
        <h2 className="nft-card-title">{title}</h2>
        <p className="nft-card-description">{description}</p>
        <p className="nft-card-price">{price}</p>
      </div>
    </div>
  );
};

export default NFTCard;
