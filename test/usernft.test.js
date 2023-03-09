const { expect } = require("chai");
let user,user2,owner;
let userAddress, ownerAddress, user2Address;
let Token;
let hardhatToken;

describe("User NFT Contract", function () {
  beforeEach(async function () {
    [owner,user,user2] = await ethers.getSigners();
    Token = await ethers.getContractFactory("UserNFT");
    this.usernft = await Token.deploy(owner.address, "he", owner.address);
    userAddress = user.address;
    user2Address = user2.address;
    ownerAddress = owner.address;
  });
  describe("ERC721 Functionality", function() {
    it("mints an nft only if user is the owner", async function () {
      await this.usernft.connect(owner).mint(userAddress, "he");
      expect(await this.usernft.ownerOf(0)).to.be.eq(user.address);
    });
  });
});
