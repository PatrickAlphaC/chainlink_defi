import React from "react";
import { Button, makeStyles } from "@material-ui/core";
import { useEthers } from "@usedapp/core";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(4),
    display: "flex",
    justifyContent: "flex-end",
  },
}));

export const Header = () => {
  const classes = useStyles();

  const { account, activateBrowserWallet } = useEthers();

  const isConnected = account !== undefined;

  return (
    <div className={classes.container}>
      {isConnected ? (
        <Button color="primary" variant="contained">
          {`${account?.slice(0, 4)}...${account?.slice(-3)}`}
        </Button>
      ) : (
        <Button
          color="primary"
          variant="contained"
          onClick={() => activateBrowserWallet()}
        >
          Connect
        </Button>
      )}
    </div>
  );
};
