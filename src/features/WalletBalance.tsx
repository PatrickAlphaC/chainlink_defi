import React from "react";
import { Token } from "./Main";
import { Typography } from "@material-ui/core";
import { useEthers, useTokenBalance } from "@usedapp/core";
import { formatUnits } from "@ethersproject/units";

export interface WalletBalanceProps {
  token: Token;
}

export const WalletBalance = ({ token }: WalletBalanceProps) => {
  const { image, address, name } = token;

  const { account } = useEthers();
  const tokenBalance = useTokenBalance(address, account);

  const formattedTokenBalance: number = tokenBalance
    ? parseFloat(formatUnits(tokenBalance, 18))
    : 0;

  return <Typography>Your un-staked {name} balance: {formattedTokenBalance}</Typography>;
};
