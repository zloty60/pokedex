import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { sort } from "./../../redux/actions/pokemonsActions";
import { BASIC, A_Z, Z_A } from "./../../utils/constants/sortTypeConstants";

const SortSelect = () => {
  const sortType = useSelector((state) => state.pokemons.formOptions.sort);
  const dispatch = useDispatch();
  const pokemonsType = useSelector((state) => state.pokemons.formOptions.type);
  const url = useSelector((state) => state.pokemons.formOptions.url);
  const name = useSelector((state) => state.pokemons.formOptions.name);
  const classes = useStyles();
  const handleChange = (event) => {
    dispatch(sort(event.target.value, pokemonsType, url, name));
  };

  return (
    <FormControl variant="filled" className={classes.formControl}>
      <InputLabel className={classes.inputLabel} id="sort-label">
        Sortuj
      </InputLabel>
      <Select
        labelId="sort-label"
        id="sort-label-select"
        value={sortType}
        onChange={handleChange}
      >
        <MenuItem value={BASIC}>Domyślnie</MenuItem>
        <MenuItem value={A_Z}>nazwa a-z</MenuItem>
        <MenuItem value={Z_A}>nazwa z-a</MenuItem>
      </Select>
    </FormControl>
  );
};

export default SortSelect;

const useStyles = makeStyles((theme) => ({
  formControl: {
    marginRight: theme.spacing(1),
    marginTop: theme.spacing(2),
    minWidth: 128,
    [theme.breakpoints.up("lg")]: {
      minWidth: 228,
    },
  },
  inputLabel: {
    color: "#616161",
  },
}));
