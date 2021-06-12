import React from "react";
import chainlink from "../chainlink.png";
import dapp from "../dapp.png";
import dai from "../dai.png";
import { YourWallet } from "./YourWallet"
import { TokenFarmContract } from "./TokenFarmContract"
import { useEthers } from "@usedapp/core";
import DappToken from "../abis/DappToken.json";

export type Token = {
  image: string;
  address: string;
  name: string;
};

export const Main = () => {

  const { chainId } = useEthers();

  const { networks } = DappToken;

  const dappTokenData = chainId ? networks[chainId] : undefined;

  const { address: dappTokenAddress } = dappTokenData || {}

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
      <YourWallet supportedTokens={supportedTokens} />
      <TokenFarmContract supportedTokens={supportedTokens} />
    </>
  );
};
