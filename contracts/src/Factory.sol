// SPDX-License-Identifier: MIT

pragma solidity ^0.8.19;

import './UserNFT.sol';

contract Factory {

  mapping (address => mapping (uint256 => address)) userCollection;
  mapping (address => uint256) numUserCollections;

  function openCollection(string memory name, string memory symbol) external returns (address userContract) {
    uint256 personalCollectionId = numUserCollections[msg.sender];
    userContract = address(new UserNFT(name, symbol, msg.sender));
    userCollection[msg.sender][personalCollectionId] = userContract;
    numUserCollections[msg.sender]++;
  }
}
