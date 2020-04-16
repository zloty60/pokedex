import React from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Container,
  Box,
  Button,
  Hidden,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core/styles";

const Navbar = ({ handleDrawerToggle }) => {
  const classes = useStyles();
  return (
    <>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Hidden lgUp>
            <IconButton
              color="inherit"
              aria-label="open mobile menu"
              edge="start"
              onClick={handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
          <Container disableGutters>
            <Box display="flex" alignItems="center">
              <Link to="/">
                <Typography>Pokedex App</Typography>
              </Link>

              <Box flexGrow={1}></Box>

              <Hidden mdDown>
                <Box mr={3}>
                  <Link to="/search">
                    <Typography>Wyszukiwarka</Typography>
                  </Link>
                </Box>
                <Link to="/info">
                  <Typography>Informacje</Typography>
                </Link>
              </Hidden>
            </Box>
          </Container>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
};

export default Navbar;

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));
