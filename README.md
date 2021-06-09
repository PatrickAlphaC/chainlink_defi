# chainlink_defi

This repo allows you to stake your FAU/LINK/DAPP or any accepted ERC20 and receive DAPP token as a reward (and can do yield farming). It gets the Kovan price feed of the ERC with ETH to calculate value. 

To get started clone this repo.

# Quickstart
Set your `MNEMONIC` and `KOVAN_RPC_URL` 
```
export MNEMONIC="apple, cheese, etc...."
export KOVAN_RPC_URL="https://kovan.infura.io/v3/adfdsfasdfadsfasdfadfadfadf"

```
You will need Truffle installed too 
Then run:
```
yarn
truffle migrate --reset --network live
yarn start
```
You can now stake and unstake your mDAI. Once you have some staked, you can issue tokens. 

To issue tokens run
```
truffle exec scripts/issue-token.js --network live
```
