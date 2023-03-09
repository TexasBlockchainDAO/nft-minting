const { expect } = require("chai");
let user,user2,owner;
let userAddress, ownerAddress, user2Address;
let Token;
let hardhatToken;

describe("Contract Factory", function () {
  beforeEach(async function () {
    [owner,user,user2] = await ethers.getSigners();
    Token = await ethers.getContractFactory("Factory");
    this.factory = await Token.deploy();
    userAddress = user.address;
    user2Address = user2.address;
    ownerAddress = owner.address;
  });
  describe("Minting a new contract", function() {
    it("should mint a single contract", async function () {

    });
  });
});
