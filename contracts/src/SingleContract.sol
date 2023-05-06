// SPDX-License-Identifier: MIT

pragma solidity ^0.8.19;

import 'openzeppelin-contracts/contracts/token/ERC721/extensions/ERC721URIStorage.sol';

contract SingleContract is ERC721URIStorage {

  uint256 private nonce;
  address private owner;

  constructor()
  ERC721("NFT-Minting", "NFTM")
  {
  }

  function mint(address account, string calldata tokenUri) public {
    _mint(account, totalSupply());
    _setTokenURI(totalSupply(), tokenUri);
    nonce++;
  }

  function totalSupply() internal view returns (uint256) {
    return nonce;
  }

}
