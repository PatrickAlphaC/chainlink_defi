import React from "react";
import chainlink from "../chainlink.png";
import dapp from "../dapp.png";
import dai from "../dai.png";
import { Token } from "./panels/StakeForm";
import { YourWallet, TokenFarmContract } from "./panels";

export const Main = () => {
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
      // TODO: Load DAPP token address
      address: "0x000",
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
