import React from "react";
import { makeStyles } from "@material-ui/core";

interface PanelContentProps {
  children: React.ReactNode;
}

const useStyles = makeStyles((theme) => ({
  container: {
    padding: `${theme.spacing(2)}px 0`,
  },
}));

export const PanelContent = ({ children }: PanelContentProps) => {
  const classes = useStyles();

  return <div className={classes.container}>{children}</div>;
};
