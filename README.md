# chainlink_defi

This repo allows you to stake your mDAI and receive DAPP token as a reward (and can do yeild farming). It gets the Kovan price feed of DAI/USD to calculate value. 

To get started clone this repo.

# Quickstart
Set your `MNEMONIC` and `RPC_URL` 
```
export MNEMONIC="apple, cheese, etc...."
export RPC_URL="https://kovan.infura.io/v3/adfdsfasdfadsfasdfadfadfadf"

```
You will need Truffle installed too 
Then run:
```
yarn
truffle migrate --reset --network live
yarn start
```
You can now stake and unstake your mDAI. 

To issue tokens run
```
truffle exec scripts/issue-tokens.js
```
