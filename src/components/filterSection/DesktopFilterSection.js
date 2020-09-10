import React from "react";
import { useDispatch } from "react-redux";
import { Toolbar, Drawer, Box, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import PokemonTypesBtn from "./PokemonTypesBtn";
import SortSelect from "./SortSelect";
import ShowPageSelect from "./ShowPageSelect";
import {
  getPokemonsType,
  getPokemonsInit,
} from "redux/actions/pokemonsActions";

const DesktopFilterSection = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const handlePokemonsType = (name, url) => {
    name === "all"
      ? dispatch(getPokemonsInit())
      : dispatch(getPokemonsType(url, name));
  };

  return (
    <nav className={classes.drawer} aria-label="pokemon section filter">
      <Drawer
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <Container>
          <Box mt={6}>
            <Box mb={6}>
              <ShowPageSelect />
              <SortSelect />
            </Box>
            <PokemonTypesBtn onClickFn={handlePokemonsType} />
          </Box>
        </Container>
      </Drawer>
    </nav>
  );
};

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: 300,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 300,
  },
}));

export default DesktopFilterSection;
