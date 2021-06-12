import React from "react";
import { SliderInput } from "../SliderInput";
import { useEthers, useTokenBalance } from "@usedapp/core";
import { formatUnits } from "@ethersproject/units";
import { Button, makeStyles } from "@material-ui/core";

export type Token = {
  image: string;
  address: string;
  name: string;
};

export interface StakeFormProps {
  token: Token;
}

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(4)
  },
  slider: {
    width: "100%",
    maxWidth: "400px"
  }
}))

export const StakeForm = ({ token }: StakeFormProps) => {
  const { image, address, name } = token;

  const { account } = useEthers();
  const tokenBalance = useTokenBalance(address, account);

  const classes = useStyles()

  const formattedTokenBalance: number = tokenBalance
    ? parseFloat(formatUnits(tokenBalance, 18))
    : 0;

  return (
    <div className={classes.container}>
      <SliderInput
        label={`Stake ${name}`}
        maxValue={formattedTokenBalance}
        id={`slider-input-${name}`}
        className={classes.slider}
      />
      <Button color="primary" variant="contained" size="large">
        Stake
      </Button>
      <Button color="secondary">Un-stake all</Button>
    </div>
  );
};
