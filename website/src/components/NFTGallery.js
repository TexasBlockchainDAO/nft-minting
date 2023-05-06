import React from 'react';
import './NFTGallery.css';

const NFTGallery = ({ nfts }) => {
  return (
    <div className="nft-gallery">
      {nfts.map((nft) => (
        <div key={nft.id} className="nft-card">
          <h3>{nft.name}</h3>
          <img src={nft.image} alt={nft.name} />
        </div>
      ))}
    </div>
  );
};

export default NFTGallery;
