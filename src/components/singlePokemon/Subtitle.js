import React from "react";
import { Typography, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const Subtitle = ({ subtitle }) => {
  const classes = useStyles();
  return (
    <>
      <Typography variant="h5" className={classes.subtitle}>
        {subtitle}
      </Typography>
      <Divider />
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  subtitle: {
    fontWeight: "400",
    marginTop: theme.spacing(3),
  },
}));

export default Subtitle;
