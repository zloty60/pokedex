import { combineReducers } from "redux";
import pokemonsReducer from "./pokemonsReducer";
import asyncReducer from "./asyncReducer";

export default combineReducers({
  pokemons: pokemonsReducer,
  async: asyncReducer,
});
