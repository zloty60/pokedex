import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  Typography,
  CardActionArea,
  Grid,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import PokemonAvatar from "./../common/PokemonAvatar";

const PokemonCard = ({ name, url }) => {
  const classes = useStyles();
  // https://pokeapi.co/api/v2/pokemon/1/  wycinamy cyfrę
  const pokemonID = url.substring(34, url.length - 1);

  return (
    <Grid item xs={6} sm={4} md={3} lg={2}>
      <Card className={classes.card}>
        <CardActionArea>
          <Link
            to={{
              pathname: `/pokemon/${name}`,
              state: {
                pokemonUrl: url,
              },
            }}
          >
            <CardContent>
              <PokemonAvatar size={110} pokemonID={pokemonID} name={name} />
              <Typography
                variant="h6"
                component="h3"
                className={classes.typography}
              >
                {name}
              </Typography>
            </CardContent>
          </Link>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

const useStyles = makeStyles((theme) => ({
  card: {
    backgroundColor: "#F5F5F5",
    textAlign: "center",
    position: "relative",
    height: "100%", // równe wysokości card
  },
  typography: {
    fontWeight: 400,
    fontSize: "1.15rem",
    marginTop: 5,
  },
}));

export default PokemonCard;

//color: "#FFAB00",
