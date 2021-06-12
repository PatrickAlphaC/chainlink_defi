import React from "react";
import { Button, makeStyles } from "@material-ui/core";
import { useEthers } from "@usedapp/core";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(4),
    display: "flex",
    justifyContent: "flex-end"
  },
}));

export const Header = () => {
  const classes = useStyles();

  const { activateBrowserWallet } = useEthers();

  return (
    <div className={classes.container}>
      <Button color="primary" variant="contained" onClick={() => activateBrowserWallet()}>
        Connect
      </Button>
    </div>
  );
};
