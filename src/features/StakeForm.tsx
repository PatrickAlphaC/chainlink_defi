import React, { useState } from "react";
import { SliderInput } from "../components";
import { useEthers, useTokenBalance } from "@usedapp/core";
import { formatUnits } from "@ethersproject/units";
import { Button, makeStyles } from "@material-ui/core";
import { Token } from "./Main";
import { useStakeTokens } from "../hooks/useStakeTokens";

export interface StakeFormProps {
  token: Token;
}

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(4),
  },
  slider: {
    width: "100%",
    maxWidth: "400px",
  },
}));

export const StakeForm = ({ token }: StakeFormProps) => {
  const { image, address, name } = token;

  const { account } = useEthers();
  const tokenBalance = useTokenBalance(address, account);

  const classes = useStyles();

  const { send: stakeTokensSend, state } = useStakeTokens();

  const formattedTokenBalance: number = tokenBalance
    ? parseFloat(formatUnits(tokenBalance, 18))
    : 0;

  const handleStakeSubmit = () => {
    stakeTokensSend(amount, address);
  };

  const [amount, setAmount] =
    useState<number | string | Array<number | string>>(0);

  return (
    <div className={classes.container}>
      <SliderInput
        label={`Stake ${name}`}
        maxValue={formattedTokenBalance}
        id={`slider-input-${name}`}
        className={classes.slider}
        value={amount}
        onChange={setAmount}
      />
      <Button
        color="primary"
        variant="contained"
        size="large"
        onClick={handleStakeSubmit}
      >
        Stake
      </Button>
    </div>
  );
};
