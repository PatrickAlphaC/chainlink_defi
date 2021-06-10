import React from "react";
import { SliderInput } from "./SliderInput";
import { useEthers, useTokenBalance } from "@usedapp/core";
import { formatUnits } from "@ethersproject/units";

export type Token = {
  image: string;
  address: string;
  name: string;
};

export interface StakeFormProps {
  token: Token;
}

export const StakeForm = ({ token }: StakeFormProps) => {
  const { image, address, name } = token;

  const { account } = useEthers();
  const tokenBalance = useTokenBalance(address, account);

  const formattedTokenBalance: number = tokenBalance
    ? parseFloat(formatUnits(tokenBalance, 18))
    : 0;

  return (
    <SliderInput
      label={`Stake ${name}`}
      maxValue={formattedTokenBalance}
      id={`slider-input-${name}`}
    />
  );
};
