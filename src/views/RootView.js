import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Hidden, Container, Box, Typography } from "@material-ui/core";

import SkeletonLoader from "components/common/SkeletonLoader";
import DesktopFilterSection from "components/filterSection/DesktopFilterSection";
import MobileFilterModal from "components/filterSection/MobileFilterModal";
import PokemonList from "components/pokemonList/PokemonList";
import SortSelect from "components/filterSection/SortSelect";
import ShowPageSelect from "components/filterSection/ShowPageSelect";
import PokemonPagination from "components/pokemonList/PokemonPagination";
import { getPokemonsInit } from "redux/actions/pokemonsActions";

const RootView = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.async.isLoading);
  const isError = useSelector((state) => state.async.isError);
  const pokemonListForRender = useSelector(
    (state) => state.pokemons.pokemonListForRender
  );
  const pokemonPagination = useSelector(
    (state) => state.pokemons.pokemonPagination
  );

  const classes = useStyles();

  useEffect(() => {
    dispatch(getPokemonsInit());
  }, [dispatch]);

  return (
    <div className={classes.root}>
      <Hidden mdDown>
        <DesktopFilterSection />
      </Hidden>
      <main className={classes.content}>
        <Container>
          {isError ? <p>upp coś poszło nie tak</p> : null}
          <Box display="flex" alignItems="center" mt={3}>
            <Hidden lgUp>
              <MobileFilterModal />
            </Hidden>
            <Box flexGrow="1" />
            <Typography>
              Strona {pokemonPagination.currentPage} /
              {pokemonPagination.totalPages}
            </Typography>
          </Box>
          <Hidden lgUp>
            <ShowPageSelect />
            <SortSelect />
          </Hidden>
          {isLoading ? (
            <SkeletonLoader number={12} />
          ) : (
            <>
              <Box mt={3} mb={3}>
                <PokemonList pokemonListForRender={pokemonListForRender} />
              </Box>
              <Box display="flex" justifyContent="center" mt={6} mb={4}>
                <PokemonPagination />
              </Box>
            </>
          )}
        </Container>
      </main>
    </div>
  );
};

export default RootView;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  content: {
    flexGrow: 1,
  },
}));
