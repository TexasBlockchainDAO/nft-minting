import React, { useState, useEffect } from 'react';
import './App.css';
import MintButton from './components/MintButton';
import NFTGallery from './components/NFTGallery';
import SearchBar from './components/SearchBar';
import nftsData from './data/nfts.json';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredNFTs, setFilteredNFTs] = useState(nftsData);

  useEffect(() => {
    const filtered = nftsData.filter((nft) =>
      nft.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredNFTs(filtered);
  }, [searchTerm]);

  return (
    <div className="App">
    <div className="header">
      <h1>NFT Minting Website</h1>
      <div>
        <MintButton/>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
    </div>
    <NFTGallery nfts={filteredNFTs} />
  </div>
  );
}

export default App;
