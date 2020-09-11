pragma solidity ^0.6.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract DaiToken is ERC20 {
    constructor() public ERC20("Mock DAI Token", "mDAI") {
        _mint(msg.sender, 1000000000000000000000000);
    }
}