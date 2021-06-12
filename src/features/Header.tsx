import React from "react";
import { Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.common.white,
    textAlign: "center",
    padding: theme.spacing(4)
  },
}));

export const Header = () => {
  const classes = useStyles();

  return (
    <Typography
      variant="h2"
      component="h1"
      classes={{
        root: classes.root,
      }}
    >
      DApp Token Farm
    </Typography>
  );
};
