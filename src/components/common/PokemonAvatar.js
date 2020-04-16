import React from "react";
import Img from "react-image";
import { Box } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import { makeStyles } from "@material-ui/core/styles";
import BlockIcon from "@material-ui/icons/Block";

const PokemonAvatar = ({ pokemonID, name, size }) => {
  const classes = useStyles({ size: size });
  const url = `https://raw.githubusercontent.com/codenights/ultimate-pokedex/master/app/public/artwork/${pokemonID}.png`;
  return (
    <Img
      className={classes.img}
      src={url}
      alt={`${name} image`}
      loader={
        <Box display="flex" justifyContent="center" alignItems="center">
          <Skeleton
            animation="wave"
            variant="rect"
            width={size}
            height={size}
          />
        </Box>
      }
      unloader={<BlockIcon className={classes.icon} />}
    />
  );
};

const useStyles = makeStyles(() => ({
  img: (size) => ({
    width: size.size,
    height: size.size,
    display: "inline-block",
  }),
  icon: (size) => ({
    width: size.size,
    height: size.size,
  }),
}));

export default PokemonAvatar;
