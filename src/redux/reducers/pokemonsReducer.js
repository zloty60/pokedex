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

import { BASIC, A_Z } from "./../../utils/constants/sortTypeConstants";

export const initialState = {
  allPokemons: [],
  pokemonList: [],
  pokemonListForRender: [],
  pokemonsFound: [],
  singlePokemon: {},
  pokemonPagination: {
    currentPage: 1,
    pokemonsCount: 0,
    totalPages: 0,
  },
  formOptions: {
    type: "all",
    sort: BASIC,
    url: "",
    name: "",
    pageLimit: 20,
  },
};

const pokemonsReducer = (state = initialState, action) => {
  switch (action.type) {
    case POKEMONS_FETCH_SUCCESS:
      return {
        ...state,
        allPokemons: [...action.payload.results],
        pokemonList: action.payload.results,
        pokemonPagination: {
          ...state.pokemonPagination,
          pokemonsCount: action.payload.count,
        },
        formOptions: { ...state.formOptions, type: "all", sort: BASIC },
      };
    case POKEMONS_TYPE_FETCH_SUCCESS:
      return {
        ...state,
        pokemonList: action.payload.pokemon,
        pokemonPagination: {
          ...state.pokemonPagination,
          pokemonsCount: action.payload.count,
        },
        formOptions: {
          ...state.formOptions,
          type: action.payload.name,
          sort: BASIC,
          url: action.payload.url,
          name: action.payload.name,
        },
      };
    case SET_DATA_FOR_RENDER:
      const offset = (action.payload - 1) * state.formOptions.pageLimit;
      const totalPages = Math.ceil(
        state.pokemonPagination.pokemonsCount / state.formOptions.pageLimit
      );
      return {
        ...state,
        pokemonListForRender: state.pokemonList.slice(
          offset,
          offset + state.formOptions.pageLimit
        ),
        pokemonPagination: {
          ...state.pokemonPagination,
          currentPage: action.payload,
          totalPages,
        },
      };
    case SINGLE_POKEMON_FETCH_SUCCESS:
      return {
        ...state,
        singlePokemon: action.payload,
      };
    case SORT:
      return {
        ...state,
        pokemonList: state.pokemonList.sort(compare(action.payload)),
        formOptions: { ...state.formOptions, sort: action.payload },
      };
    case SET_PAGE_LIMIT:
      return {
        ...state,
        formOptions: { ...state.formOptions, pageLimit: action.payload },
      };
    case SEARCH_POKEMONS:
      return {
        ...state,
        pokemonsFound: state.allPokemons.filter(
          (pokemon) =>
            pokemon.name
              .trim()
              .toUpperCase()
              .indexOf(action.payload.toUpperCase()) > -1
        ),
      };
    case CLEAR_SEARCH_POKEMONS:
      return {
        ...state,
        pokemonsFound: [],
      };
    default:
      return state;
  }
};

const compare = (sort) => (a, b) => {
  const A = a.name ? a.name.toUpperCase() : a.pokemon.name.toUpperCase(); // pokemon.name przy type
  const B = b.name ? b.name.toUpperCase() : b.pokemon.name.toUpperCase();

  let comparison = 0;
  if (A > B) {
    comparison = 1;
  } else if (A < B) {
    comparison = -1;
  }
  return sort === A_Z ? comparison : comparison * -1;
};

export default pokemonsReducer;
