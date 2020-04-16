import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { setPageLimit } from "./../../redux/actions/pokemonsActions";

const ShowPageSelect = () => {
  const dispatch = useDispatch();

  const pageLimit = useSelector(
    (state) => state.pokemons.formOptions.pageLimit
  );
  const classes = useStyles();
  const handleChange = (event) => {
    dispatch(setPageLimit(event.target.value));
  };

  return (
    <FormControl variant="filled" className={classes.formControl}>
      <InputLabel id="sort-label">pokazuj na stronie</InputLabel>
      <Select
        labelId="sort-label"
        id="sort-label-select"
        value={pageLimit}
        onChange={handleChange}
      >
        <MenuItem value={10}>10</MenuItem>
        <MenuItem value={20}>20</MenuItem>
        <MenuItem value={30}>30</MenuItem>
        <MenuItem value={40}>40</MenuItem>
      </Select>
    </FormControl>
  );
};

export default ShowPageSelect;

const useStyles = makeStyles((theme) => ({
  formControl: {
    marginRight: theme.spacing(1),
    marginTop: theme.spacing(2),
    minWidth: 134,
    [theme.breakpoints.up("lg")]: {
      minWidth: 228,
    },
  },
}));
