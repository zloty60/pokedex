import React from "react";
import { useSelector } from "react-redux";
import { Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import pokemonTypes from "utils/data/pokemonTypes";

const PokemonTypesBtn = ({ onClickFn }) => {
  const btnType = useSelector((state) => state.pokemons.formOptions.type);
  const classes = useStyles();
  return (
    <Grid container spacing={2}>
      {pokemonTypes.map((btn) => (
        <Grid key={btn.name} item xs={4} lg={6}>
          <Button
            variant="outlined"
            className={classes.btn}
            disabled={btnType === btn.name ? true : false}
            onClick={() => onClickFn(btn.name, btn.url)}
          >
            {btn.name}
          </Button>
        </Grid>
      ))}
    </Grid>
  );
};

const useStyles = makeStyles((theme) => ({
  btn: {
    borderColor: "#006c74",
  },
}));

export default PokemonTypesBtn;
