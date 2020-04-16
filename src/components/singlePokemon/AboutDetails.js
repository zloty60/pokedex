import React from "react";
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const AboutDetails = ({ pokemon, value }) => {
  const classes = useStyles();
  return (
    <Box mt={1} display="flex">
      <Typography className={classes.property}>{value}:</Typography>
      <Typography className={classes.value}>{pokemon[value]}</Typography>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  property: {
    fontWeight: "300",
    color: "#797979",
    width: 160,
  },
  value: {
    fontWeight: 500,
  },
}));

export default AboutDetails;
