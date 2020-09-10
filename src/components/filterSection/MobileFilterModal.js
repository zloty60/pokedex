import React, { useState } from "react";
import {
  Dialog,
  Button,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Slide,
  Container,
  Box,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CloseIcon from "@material-ui/icons/Close";
import { useDispatch } from "react-redux";

import {
  getPokemonsType,
  getPokemonsInit,
} from "redux/actions/pokemonsActions";
import PokemonTypesBtn from "./PokemonTypesBtn";

const MobileFilterModal = () => {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const handleClickOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handlePokemonsType = (name, url) => {
    setIsOpen(false);
    name === "all"
      ? dispatch(getPokemonsInit())
      : dispatch(getPokemonsType(url, name));
  };

  return (
    <>
      <Button variant="contained" onClick={handleClickOpen}>
        Pokaż filtry
      </Button>
      <Dialog
        fullScreen
        open={isOpen}
        TransitionComponent={Transition}
        onClose={handleClose}
      >
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open mobile filter modal"
              edge="start"
              onClick={handleClose}
            >
              <CloseIcon />
            </IconButton>
            <Typography>Wybierz typ pokemona</Typography>
          </Toolbar>
        </AppBar>
        <Toolbar />
        <Container>
          <Box mt={2}>
            <PokemonTypesBtn onClickFn={handlePokemonsType} />
          </Box>
        </Container>
      </Dialog>
    </>
  );
};

export default MobileFilterModal;

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#006c74",
  },
  btn: {
    borderColor: "#006c74",
  },
  dialog: {
    width: 300,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
