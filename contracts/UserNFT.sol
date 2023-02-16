// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import '@openzeppelin/contracts/token/ERC721/ERC721.sol';
import '@openzeppelin/contracts/access/Ownable.sol';

contract UserNFT is ERC721, Ownable {

  constructor(string memory name, string memory symbol) 
  ERC721(name, symbol)
  {}

  function mint(address account, string calldata tokenUri) public onlyOwner {

  }
}
