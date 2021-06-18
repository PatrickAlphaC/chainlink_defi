# chainlink_defi

This repo allows you to stake your FAU/LINK/DAPP or any accepted ERC20 and receive DAPP token as a reward (and can do yield farming). It gets the Kovan price feed of the ERC with ETH to calculate value.

To get started clone this repo.

## Token faucets

- LINK: https://kovan.chain.link/
- FAU: https://erc20faucet.com/

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

You can now stake and unstake your LINK or FAU. Once you have some staked, you can issue DAPP tokens.

To issue tokens run

```
truffle exec scripts/issue-token.js --network live
```

# Dapp front-end

The front-end for this Dapp is built with:

- [Create React App with Typescript](https://create-react-app.dev/docs/adding-typescript)
- [UseDApp](https://usedapp.io/)
- [Material UI](https://material-ui.com/)

Material UI is one of the most popular React component libraries. Built to follow [Google's Material Design guidelines](https://material.io/design).

Our React components are split into two directories:

- `/src/features` - Stateful components which are usually tightly coupled to others in our application
- `/src/components` - Usually stateless components which are decoupled from our application logic can be re-used in any 'feature' of our application

This is just one way to help organise your React components. There's no "correct" way!

`/src/hooks` contains custom React hooks to make calls and transactions to our smart contracts. See [React's documentation on hooks](https://reactjs.org/docs/hooks-intro.html) and [UseDApp's documentation on writing custom hooks](https://usedapp.readthedocs.io/en/latest/guide.html#custom-hooks)
