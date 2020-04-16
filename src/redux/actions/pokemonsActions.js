import axios from "axios";

import {
  POKEMONS_FETCH_SUCCESS,
  POKEMONS_TYPE_FETCH_SUCCESS,
  SET_DATA_FOR_RENDER,
  SINGLE_POKEMON_FETCH_SUCCESS,
  SORT,
  SET_PAGE_LIMIT,
  SEARCH_POKEMONS,
  CLEAR_SEARCH_POKEMONS,
} from "./../../utils/constants/pokemonsReducerConstants";

import {
  asyncActionStart,
  asyncActionFinish,
  asyncActionError,
} from "./asyncActions";

import { BASIC } from "./../../utils/constants/sortTypeConstants";

import { ALL_POKEMONS_URL } from "./../../utils/constants/urlConstants";

// API nie oferuje możliwości sortowania pokemonów np.alfabetycznie dlatego pobieram wszystkie pokemony
// i dzięki temu mogę je posortować właśnie np.alfabetczynie w przypadku gdy API zwracałoby ogromną ilość
// danych nie byłby to najlepszy pomysł

export function getPokemonsInit() {
  return async function (dispatch) {
    dispatch(asyncActionStart());
    try {
      const response = await axios.get(ALL_POKEMONS_URL);
      dispatch(asyncActionFinish());
      dispatch({
        type: POKEMONS_FETCH_SUCCESS,
        payload: {
          results: response.data.results,
          count: response.data.count,
        },
      });
      dispatch(setPagination(1));
    } catch (error) {
      dispatch(asyncActionError());
    }
  };
}

export function getPokemonsType(url, name) {
  return async function (dispatch) {
    dispatch(asyncActionStart());
    try {
      const response = await axios.get(url);
      dispatch(asyncActionFinish());
      dispatch({
        type: POKEMONS_TYPE_FETCH_SUCCESS,
        payload: {
          pokemon: response.data.pokemon,
          count: response.data.pokemon.length,
          name: name,
          url: url,
        },
      });
      dispatch(setPagination(1));
    } catch (error) {
      dispatch(asyncActionError());
    }
  };
}

export function getSinglePokemon(url) {
  return async function (dispatch) {
    dispatch(asyncActionStart());
    try {
      const response = await axios.get(url);
      dispatch(asyncActionFinish());
      dispatch({
        type: SINGLE_POKEMON_FETCH_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch(asyncActionError());
    }
  };
}

export function setPagination(currentPage) {
  return {
    type: SET_DATA_FOR_RENDER,
    payload: currentPage,
  };
}

export function sort(sortType, pokemonsType, url, name) {
  if (sortType === BASIC) {
    if (pokemonsType === "all") {
      return (dispatch) => {
        dispatch(getPokemonsInit());
      };
    } else {
      return (dispatch) => {
        dispatch(getPokemonsType(url, name));
      };
    }
  }

  return (dispatch) => {
    dispatch({ type: SORT, payload: sortType });
    dispatch(setPagination(1));
  };
}

export function setPageLimit(pageLimit) {
  return function (dispatch) {
    dispatch({
      type: SET_PAGE_LIMIT,
      payload: pageLimit,
    });
    dispatch(setPagination(1));
  };
}

export function searchPokemon(txt) {
  return {
    type: SEARCH_POKEMONS,
    payload: txt,
  };
}

export function clearSearchPokemons() {
  return {
    type: CLEAR_SEARCH_POKEMONS,
  };
}

// export function savePokemon(name, url) {
//   return {
//     type: "SAVE_POKEMON",
//     payload: { name, url },
//   };
// }

// export function deleteSavedPokemon(name) {
//   return {
//     type: "REMOVE_SAVED_POKEMON",
//     payload: name,
//   };
// }
