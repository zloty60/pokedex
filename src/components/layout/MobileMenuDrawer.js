import React from "react";
import { Link } from "react-router-dom";
import {
  Drawer,
  Toolbar,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { makeStyles } from "@material-ui/core/styles";

const MobileMenuDrawer = ({ mobileOpen, handleDrawerToggle }) => {
  const classes = useStyles();
  return (
    <Drawer
      variant="temporary"
      open={mobileOpen}
      onClose={handleDrawerToggle}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <Toolbar />
      <IconButton
        color="inherit"
        aria-label="close mobile menu"
        edge="start"
        onClick={handleDrawerToggle}
        className={classes.closeButton}
      >
        <CloseIcon />
      </IconButton>
      <List>
        <Link to="/" onClick={handleDrawerToggle}>
          <ListItem button>
            <ListItemText primary="Strona główna" />
          </ListItem>
        </Link>
        <Link to="/search" onClick={handleDrawerToggle}>
          <ListItem button>
            <ListItemText primary="Wyszukiwarka" />
          </ListItem>
        </Link>
        <Link to="/info" onClick={handleDrawerToggle}>
          <ListItem button>
            <ListItemText primary="Informacje" />
          </ListItem>
        </Link>
      </List>
    </Drawer>
  );
};

const useStyles = makeStyles((theme) => ({
  drawerPaper: {
    maxWidth: 300,
    width: "100%",
  },
  closeButton: {
    position: "fixed",
    top: 5,
    left: 12,
  },
}));

export default MobileMenuDrawer;
