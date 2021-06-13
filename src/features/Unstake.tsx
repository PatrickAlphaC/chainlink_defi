import React from "react";
import { Button } from "@material-ui/core";
import { Token } from "./Main";
import { useUnstakeTokens } from "../hooks/useUnstakeTokens";

export interface UnstakeFormProps {
  token: Token;
}

export const Unstake = ({ token }: UnstakeFormProps) => {
  const { image, address: tokenAddress, name } = token;

  const { send: unstakeTokensSend, state: unstakeTokensState } =
    useUnstakeTokens();

  const handleUnstakeSubmit = () => {
    return unstakeTokensSend(tokenAddress);
  };

  return (
    <Button
      color="primary"
      variant="contained"
      size="large"
      onClick={handleUnstakeSubmit}
    >
      Unstake all {name}
    </Button>
  );
};
