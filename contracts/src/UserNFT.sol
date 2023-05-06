// SPDX-License-Identifier: MIT

pragma solidity ^0.8.19;

import 'openzeppelin-contracts/contracts/token/ERC721/extensions/ERC721URIStorage.sol';

contract UserNFT is ERC721URIStorage {

  uint256 private nonce;
  address private owner;

  constructor(string memory name, string memory symbol, address creator) 
  ERC721(name, symbol)
  {
    owner = creator;
  }

  function mint(address account, string calldata tokenUri) public {
    assembly { // gas savings
        if iszero(eq(sload(owner.slot), caller())) {
            revert(0x00, 0x00)
        }
    }
    _mint(account, totalSupply());
    _setTokenURI(totalSupply(), tokenUri);
    nonce++;
  }

  function totalSupply() internal view returns (uint256) {
    return nonce;
  }

  function transferOwnership(address newOwner) external {
    assembly { // gas savings
        if iszero(eq(sload(owner.slot), caller())) {
            revert(0x00, 0x01)
        }
    }
    owner = newOwner; // This CAN be address(0) to prevent any further minting!
  }

}
