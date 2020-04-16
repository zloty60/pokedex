import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Typography, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { getSinglePokemon } from "./../redux/actions/pokemonsActions";
import PokemonAvatar from "./../components/common/PokemonAvatar";
import SkeletonLoader from "./../components/common/SkeletonLoader";
import AboutDetails from "./../components/singlePokemon/AboutDetails";
import PokemonName from "./../components/singlePokemon/PokemonName";
import Subtitle from "./../components/singlePokemon/Subtitle";
import StatisticsBar from "./../components/singlePokemon/StatisticsBar";

const PokemonView = (props) => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.async.isLoading);
  const isError = useSelector((state) => state.async.isError);
  const pokemon = useSelector((state) => state.pokemons.singlePokemon);
  const classes = useStyles();
  const pokemonName = props.match.params.name;

  useEffect(() => {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
    dispatch(getSinglePokemon(url));
  }, [pokemonName]);

  return (
    <Container maxWidth="sm" className={classes.container}>
      {isError ? <p>upp coś poszło nie tak</p> : null}
      {isLoading ? (
        <Box mt={6}>
          <SkeletonLoader number={10} />
        </Box>
      ) : (
        <>
          <Box mt={4} mb={3} display="flex" justifyContent="center">
            <PokemonAvatar
              pokemonID={pokemon.id}
              name={pokemon.name}
              size={200}
            />
          </Box>
          <PokemonName name={pokemon.name} />
          <Box mt={3} mb={3}>
            <Subtitle subtitle="About" />
            <AboutDetails pokemon={pokemon} value="weight" />
            <AboutDetails pokemon={pokemon} value="height" />
            <AboutDetails pokemon={pokemon} value="base_experience" />
            <Subtitle subtitle="Statistics" />
            {pokemon.stats
              ? pokemon.stats.map((stat) => (
                  <Box
                    key={stat.stat.name}
                    display="flex"
                    alignItems="center"
                    mt={3}
                  >
                    <Typography className={classes.statisticsName}>
                      {stat.stat.name}
                    </Typography>
                    <StatisticsBar
                      statName={stat.stat.name}
                      statValue={stat.base_stat}
                    />
                  </Box>
                ))
              : null}

            <Subtitle subtitle="Types" />
            <Box mt={2} mb={2} display="flex">
              {pokemon.types
                ? pokemon.types.map((type) => (
                    <Box mr={5} key={type.type.name}>
                      <Typography
                        key={type.type.name}
                        className={classes.value}
                      >
                        {type.type.name}
                      </Typography>
                    </Box>
                  ))
                : null}
            </Box>
            <Subtitle subtitle="Abilities" />
            <Box mt={2} mb={2} display="flex">
              {pokemon.abilities
                ? pokemon.abilities.map((type) => (
                    <Box mr={5} key={type.ability.name}>
                      <Typography className={classes.value}>
                        {type.ability.name}
                      </Typography>
                    </Box>
                  ))
                : null}
            </Box>
          </Box>
        </>
      )}
    </Container>
  );
};

const useStyles = makeStyles((theme) => ({
  container: {
    marginBottom: theme.spacing(5),
  },
  value: {
    fontWeight: 500,
  },
  statisticsName: {
    color: "#797979",
    fontWeight: "300",
    [theme.breakpoints.up("sm")]: {
      width: 220,
    },
    width: 100,
  },
}));

export default PokemonView;
