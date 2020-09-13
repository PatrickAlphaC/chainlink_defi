const DappToken = artifacts.require('DappToken')

module.exports = async function(deployer, network, accounts) {
  // Deploy Dapp Token
  await deployer.deploy(DappToken)
  const dappToken = await DappToken.deployed()
}
