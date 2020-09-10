import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Box, InputBase, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";

import {
  searchPokemon,
  clearSearchPokemons,
  getPokemonsInit,
} from "redux/actions/pokemonsActions";
import PokemonList from "components/pokemonList/PokemonList";

const SearchView = () => {
  const dispatch = useDispatch();
  const pokemonsFound = useSelector((state) => state.pokemons.pokemonsFound);
  const allPokemons = useSelector((state) => state.pokemons.allPokemons);
  const [searchTxt, setSearchTxt] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    dispatch(clearSearchPokemons());
    // allPokemons pobierana są na głównej stronie , jeżeli przejdziemy
    // do wyszukiwarki nie bedąc wczesniej na głównej stronie nie zostatnie
    // pobrana tablica i nie będzie możliwości przeszukiwania pokemonow
    // dlatego dodaje taki warunek w przypadku gdyby podobna sytuacja istniała
    // na innych stronach można by pobierać pokemony w komponencie APP
    if (allPokemons.length === 0) {
      dispatch(getPokemonsInit());
    }
  }, [dispatch, allPokemons.length]);

  const handleOnSubmit = (e) => {
    setIsSubmit(true);
    e.preventDefault();
    if (searchTxt.length > 2) {
      dispatch(searchPokemon(searchTxt));
    }
  };

  const handleTxtValue = (e) => {
    setIsSubmit(false);
    setSearchTxt(e.target.value);
  };

  return (
    <Container>
      <Box mt={4} mb={4}>
        <form onSubmit={handleOnSubmit} className={classes.form}>
          <Box display="flex">
            <InputBase
              autoFocus={true}
              className={classes.input}
              placeholder="wpisz przynajmniej trzy znaki"
              inputProps={{ "aria-label": "wpisz nazwe szukanego pokemona" }}
              value={searchTxt}
              onChange={handleTxtValue}
            />

            <Button
              disabled={allPokemons.length === 0}
              color="primary"
              type="submit"
              variant="contained"
            >
              search
            </Button>
          </Box>
          {isSubmit && searchTxt.length < 3 ? (
            <Box mt={4}>
              <Alert severity="error">wpisz przynajmniej 3 znaki</Alert>
            </Box>
          ) : null}
        </form>
      </Box>
      {pokemonsFound.length > 0 ? (
        <PokemonList pokemonListForRender={pokemonsFound} />
      ) : (
        <>
          {isSubmit && searchTxt.length > 2 && (
            <Box mt={4}>
              <Alert severity="error">nic nie znaleziono</Alert>
            </Box>
          )}
        </>
      )}
    </Container>
  );
};

const useStyles = makeStyles((theme) => ({
  input: {
    backgroundColor: "#F5F5F5",
    width: "100%",
    padding: "8px 9px 9px",
    borderRadius: "4px",
    marginRight: 15,
  },
}));

export default SearchView;
