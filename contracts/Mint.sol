// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC721/ERC721.sol";

contract MediaNFT is ERC721 {
    // string public  name = "Media NFT";
    // string public symbol = "MEDIA";
    
    uint256 private tokenCounter;

    mapping(uint256 => string) private tokenURIs;
    mapping(uint256 => address) private tokenOwners;
    mapping(address => string[]) private ownerItems;

    constructor() ERC721("Media NFT", "MEDIA") public {}

    function mint(address _to, string memory _tokenURI) public {
        // Check for integer overflow when calculating the token ID
        uint256 tokenId = tokenCounter++;
        require(tokenCounter > tokenId, "Integer Overflow");

        // Ensure that the _to address is valid
        require(_to != address(0), "Invalid address");

        // Ensure that the _tokenURI string is a valid IPFS hash
        // require(verifyIPFSHash(_tokenURI), "Invalid IPFS hash");

        // Mint the token
        tokenURIs[tokenId] = _tokenURI;
        tokenOwners[tokenId] = _to;

        //track owner
        ownerItems[_to].push(_tokenURI);

        // Emit the TokenMinted event
        emit TokenMinted(tokenId, _to, _tokenURI);
    }

    //verify that it is actually an IPFS hash
    function verifyIPFSHash(string memory _tokenURI) internal view returns (bool) {
        // Convert the string to a byte array
        bytes memory hashBytes = bytes(_tokenURI);
        // Check if the first two characters of the byte array are "Qm"
        if (hashBytes[0] != 0x51 || hashBytes[1] != 0x6d) {
            return false;
        }
        // Check if the remaining characters are valid base58 characters
        for (uint i = 2; i < hashBytes.length; i++) {
            if (uint8(hashBytes[i]) < 33 || uint8(hashBytes[i]) > 126) {
                return false;
            }
        }

        return true;
    }




    //Utility functions
    function getTokenURI(uint256 _tokenId) public view returns (string memory) {
        return tokenURIs[_tokenId];
    }

    function getTokenOwner(uint256 _tokenId) public view returns (address) {
        return tokenOwners[_tokenId];
    }

    function getOwnerTokens(address ownerAddress) public view returns (string[] memory) {
        return ownerItems[ownerAddress];
    }

    function getTokenDetails(uint256 _tokenId) public view returns (uint256, address, string memory) {
        return (_tokenId, tokenOwners[_tokenId], tokenURIs[_tokenId]);
    }

    event TokenMinted(uint256 tokenId, address owner, string uri);

}
