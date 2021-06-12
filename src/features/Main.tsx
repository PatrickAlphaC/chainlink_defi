import React from "react";
import chainlink from "../chainlink.png";
import dapp from "../dapp.png";
import dai from "../dai.png";
import { YourWallet } from "./YourWallet";
import { TokenFarmContract } from "./TokenFarmContract";
import { useEthers } from "@usedapp/core";
import DappToken from "../abis/DappToken.json";
import { Typography, makeStyles } from "@material-ui/core";

export type Token = {
  image: string;
  address: string;
  name: string;
};

const useStyles = makeStyles((theme) => ({
  title: {
    color: theme.palette.common.white,
    textAlign: "center",
    padding: theme.spacing(4)
  },
}));

export const Main = () => {
  const { chainId } = useEthers();

  const { networks } = DappToken;

  const dappTokenData = chainId ? networks[chainId] : undefined;

  const { address: dappTokenAddress } = dappTokenData || {};

  const classes = useStyles()

  const supportedTokens: Array<Token> = [
    {
      image: chainlink,
      address: "0xa36085F69e2889c224210F603D836748e7dC0088",
      name: "LINK",
    },
    {
      image: dai,
      address: "0xFab46E002BbF0b4509813474841E0716E6730136",
      name: "FAU",
    },
    {
      image: dapp,
      address: dappTokenAddress,
      name: "DAPP",
    },
  ];

  return (
    <>
      <Typography
        variant="h2"
        component="h1"
        classes={{
          root: classes.title,
        }}
      >
        Dapp Token Farm
      </Typography>
      <YourWallet supportedTokens={supportedTokens} />
      <TokenFarmContract supportedTokens={supportedTokens} />
    </>
  );
};
