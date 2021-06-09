import React, { useState } from "react";
import chainlink from "../chainlink.png";
import { useEthers, useTokenBalance } from "@usedapp/core";
import { formatUnits } from "@ethersproject/units";

export const Main = () => {
  type Token = {
    image: string;
    address: string;
    name: string;
  };

  type Tokens = {
    [key: string]: Token;
  };

  const supportedTokens: Tokens = {
    chainlink: {
        image: chainlink,
        address: "0xa36085F69e2889c224210F603D836748e7dC0088",
        name: "LINK"
    },
  };

  const [selectedToken, setSelectedToken] = useState(supportedTokens.chainlink)

  const { account } = useEthers();
  const tokenBalance = useTokenBalance(
    selectedToken.address,
    account
  );

  return (
    <span>
      {tokenBalance && <p>Balance: {formatUnits(tokenBalance, 18)}</p>}
    </span>
  );
};
