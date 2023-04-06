import React from 'react';

const MintButton = ({ onMint }) => {
  return (
    <button className="mint-button" onClick={onMint}>
      Mint NFT
    </button>
  );
};

export default MintButton;
