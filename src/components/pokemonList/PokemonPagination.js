import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "@material-ui/lab/Pagination";

import { setPagination } from "redux/actions/pokemonsActions";

const PokemonPagination = () => {
  const dispatch = useDispatch();
  const totalPages = useSelector(
    (state) => state.pokemons.pokemonPagination.totalPages
  );
  const currentPage = useSelector(
    (state) => state.pokemons.pokemonPagination.currentPage
  );
  const handleChange = (event, value) => {
    dispatch(setPagination(value));
  };
  return (
    <>
      <Pagination
        onChange={handleChange}
        count={totalPages}
        boundaryCount={1}
        shape="rounded"
        siblingCount={1}
        page={currentPage}
      />
    </>
  );
};

export default PokemonPagination;
