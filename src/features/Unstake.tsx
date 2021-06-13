import React, { useState, useEffect } from "react";
import {
  Button,
  CircularProgress,
  Snackbar,
  Typography,
} from "@material-ui/core";
import { Token } from "./Main";
import { useUnstakeTokens } from "../hooks/useUnstakeTokens";
import Alert from "@material-ui/lab/Alert";
import { useNotifications } from "@usedapp/core";
import { useStakingBalance } from "../hooks/useStakingBalance";
import { formatUnits } from "@ethersproject/units";

export interface UnstakeFormProps {
  token: Token;
}

export const Unstake = ({ token }: UnstakeFormProps) => {
  const { image, address: tokenAddress, name } = token;

  const { notifications } = useNotifications();

  const balance = useStakingBalance(tokenAddress);

  const formattedBalance: number = balance
    ? parseFloat(formatUnits(balance, 18))
    : 0;

  const { send: unstakeTokensSend, state: unstakeTokensState } =
    useUnstakeTokens();

  const handleUnstakeSubmit = () => {
    return unstakeTokensSend(tokenAddress);
  };

  const [showUnstakeSuccess, setShowUnstakeSuccess] = useState(false);

  const handleCloseSnack = () => {
    showUnstakeSuccess && setShowUnstakeSuccess(false);
  };

  useEffect(() => {
    if (
      notifications.filter(
        (notification) =>
          notification.type === "transactionSucceed" &&
          notification.transactionName === "Unstake tokens"
      ).length > 0
    ) {
      !showUnstakeSuccess && setShowUnstakeSuccess(true);
    }
  }, [notifications, showUnstakeSuccess]);

  const isMining = unstakeTokensState.status === "Mining";

  const hasZeroAmount = formattedBalance === 0;

  return (
    <>
      <Typography>
        Your staked {name} balance: {formattedBalance}
      </Typography>
      <Button
        color="primary"
        variant="contained"
        size="large"
        onClick={handleUnstakeSubmit}
        disabled={isMining || hasZeroAmount}
      >
        {isMining ? <CircularProgress size={26} /> : `Unstake all ${name}`}
      </Button>
      <Snackbar
        open={showUnstakeSuccess}
        autoHideDuration={5000}
        onClose={handleCloseSnack}
      >
        <Alert onClose={handleCloseSnack} severity="success">
          Tokens unstaked successfully!
        </Alert>
      </Snackbar>
    </>
  );
};
