import { Paper, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: `${theme.spacing(4)}px 0`, 
    padding: theme.spacing(2),
  },
}));

export const Panel = ({ ...rest }) => {
  const classes = useStyles();

  return (
    <Paper
      classes={{
        root: classes.root,
      }}
      elevation={3}
      {...rest}
    />
  );
};
