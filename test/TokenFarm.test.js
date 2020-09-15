const DappToken = artifacts.require("DappToken");
const TokenFarm = artifacts.require("TokenFarm");
const { LinkToken } = require("@chainlink/contracts/truffle/v0.4/LinkToken");

require("chai")
  .use(require("chai-as-promised"))
  .should();

function tokens(n) {
  return web3.utils.toWei(n, "ether");
}

contract("TokenFarm", ([owner, investor]) => {
  let dappToken, tokenFarm, linkToken;

  before(async () => {
    // Load Contracts
    dappToken = await DappToken.new();
    tokenFarm = await TokenFarm.new(dappToken.address);
    // linkToken = await LinkToken.new()

    // Transfer all Dapp tokens to farm (1 million)
    await dappToken.transfer(tokenFarm.address, tokens("1000000"));
  });

  describe("Dapp Token deployment", async () => {
    it("has a name", async () => {
      const name = await dappToken.name();
      assert.equal(name, "DApp Token");
    });
  });

  describe("Token Farm deployment", async () => {
    it("has a name", async () => {
      const name = await tokenFarm.name();
      assert.equal(name, "Dapp Token Farm");
    });

    it("contract has tokens", async () => {
      let balance = await dappToken.balanceOf(tokenFarm.address);
      assert.equal(balance.toString(), tokens("1000000"));
    });
  });

  // Broken
  describe("Farming tokens", async () => {
    it("rewards investors for staking mDai tokens", async () => {
      let result, starting_balance, ending_balance;

      // // Check investor balance before staking
      // startingBalanceDappToken = await dappToken.balanceOf(investor);
      // startingBalanceLinkToken = await linkToken.balanceOf(investor);
      // assert.equal(
      //   startingBalanceDappToken.toString(),
      //   tokens("0"),
      //   "investor Dapp wallet starts at 0"
      // );

      // await linkToken.approve(tokenFarm.address, tokens("3"), {
      //   from: investor,
      // });
      // await tokenFarm.stakeTokens(tokens("100"), { from: investor });

      // Please write tests
    });
  });
});
