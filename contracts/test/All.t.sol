// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "forge-std/Test.sol";
import "../src/SingleContract.sol";

contract AllTest is Test {
    SingleContract public sc;

    function setUp() public {
        sc = new SingleContract();
    }

    function testMint() public {
        sc.mint(address(this), "NotAURL");
        assertEq(sc.ownerOf(0), address(this));
        vm.expectRevert();
        assertEq(sc.ownerOf(1), address(0));
    }
}
