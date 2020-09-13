const DappToken = artifacts.require("DappToken");
const TokenFarm = artifacts.require("TokenFarm");

module.exports = async function(deployer, network, accounts) {
  // Deploy TokenFarm
  const dappToken = await DappToken.deployed();
  await deployer.deploy(TokenFarm, dappToken.address);
  const tokenFarm = await TokenFarm.deployed();
  await dappToken.transfer(tokenFarm.address, "1000000000000000000000000");

  if (network.startsWith("kovan") || network.startsWith("live")) {
    // LINK Token address
    await tokenFarm.addAllowedTokens(
      "0xa36085F69e2889c224210F603D836748e7dC0088"
    );
    await tokenFarm.setPriceFeedContract(
      "0xa36085F69e2889c224210F603D836748e7dC0088",
      "0x3Af8C569ab77af5230596Acf0E8c2F9351d24C38"
    );
    // FAU Token address. Pretending FAU is DAI
    await tokenFarm.addAllowedTokens(
      "0xFab46E002BbF0b4509813474841E0716E6730136"
    );
    await tokenFarm.setPriceFeedContract(
      "0xFab46E002BbF0b4509813474841E0716E6730136",
      "0x777A68032a88E5A84678A77Af2CD65A7b3c0775a"
    );
    // DAPP Token Address - also dai
    await tokenFarm.addAllowedTokens(dappToken.address);
    await tokenFarm.setPriceFeedContract(
      dappToken.address,
      "0x777A68032a88E5A84678A77Af2CD65A7b3c0775a"
    );
  }
};
