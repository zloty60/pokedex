import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const PokemonName = ({ name }) => {
  const classes = useStyles();
  return (
    <Typography
      variant="h4"
      component="h1"
      align="center"
      className={classes.name}
    >
      {name}
    </Typography>
  );
};

export default PokemonName;

const useStyles = makeStyles((theme) => ({
  name: {
    textTransform: "capitalize",
  },
}));
