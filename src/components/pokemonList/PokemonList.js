import React from "react";
import { Grid } from "@material-ui/core";
import PokemonCard from "./PokemonCard";

const PokemonList = ({ pokemonListForRender }) => {
  return (
    <Grid container spacing={3}>
      {pokemonListForRender.map((pokemon) => (
        <PokemonCard
          key={
            pokemon.hasOwnProperty("pokemon") // allPokemons zwraca {name:"bulbasaur"} a type zwraca pokemon pokemon:{name:"bulbasaur"}
              ? pokemon.pokemon.name
              : pokemon.name
          }
          name={
            pokemon.hasOwnProperty("pokemon")
              ? pokemon.pokemon.name
              : pokemon.name
          }
          url={
            pokemon.hasOwnProperty("pokemon")
              ? pokemon.pokemon.url
              : pokemon.url
          }
        />
      ))}
    </Grid>
  );
};

export default PokemonList;
