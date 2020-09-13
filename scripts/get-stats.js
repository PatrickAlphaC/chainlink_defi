const TokenFarm = artifacts.require("TokenFarm");

module.exports = async function(callback) {
  let tokenFarm = await TokenFarm.deployed();
  let totalValue = await tokenFarm.getUserTotalValue(
    "0x643315C9Be056cDEA171F4e7b2222a4ddaB9F88D"
  );

  console.log(totalValue.toString());
  callback();
};
