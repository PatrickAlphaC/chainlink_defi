import React from "react";
import { Token } from "./Main";
import { Typography } from "@material-ui/core";
import { useStakingBalance } from "../hooks/useStakingBalance";
import { formatUnits } from "@ethersproject/units";

export interface StakingBalanceProps {
  token: Token;
}

export const StakingBalance = ({ token }: StakingBalanceProps) => {
  const { image, address, name } = token;

  const balance = useStakingBalance(address);

  const formattedBalance: number = balance
    ? parseFloat(formatUnits(balance, 18))
    : 0;

  return <Typography>Your staked {name} balance: {formattedBalance}</Typography>;
};
