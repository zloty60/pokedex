import React from "react";
import { Container, Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const InfoView = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="md">
      <Box mt={4} className={classes.box}>
        <Typography variant="h5" gutterBottom>
          Użyte technologie:
        </Typography>
        <ul>
          {["React", "Redux", "Material-UI", "React-Roter", "Axios"].map(
            (item) => (
              <li key={item}>
                <Typography>{item}</Typography>
              </li>
            )
          )}
          <li>
            <Typography>
              <a
                href="https://pokeapi.co/"
                target="_blank"
                rel="noopener noreferrer"
                className={classes.link}
              >
                PokeApi
              </a>
            </Typography>
          </li>
        </ul>
        <Typography variant="h5" gutterBottom>
          Działanie aplikacji:
          <ul>
            <li>
              <Typography>
                Aplikacja na głównej stronie wyświetla listę wszystkich
                pokemonów.
              </Typography>
            </li>
            <li>
              <Typography>Na samym dole znajduję się paginacja.</Typography>
            </li>
            <li>
              <Typography>
                Po lewej stronie na szerokich urządzeniach mamy dostepną sekcje
                do filtrowania listy, w przypadku mniejszych urządzeń trzeba
                kliknąć pokaż filtry.
              </Typography>
            </li>
            <li>
              <Typography>
                Aplikacja filtruję pokemony ze względu na ich typ, jest także
                możliwość sortowania pokemonów po ich nazwie.
              </Typography>
            </li>
            <li>
              <Typography>
                Aplikacja umożliwia także zanaczenie ile pokemonów ma być
                dostępnych na stronie.
              </Typography>
            </li>
            <li>
              <Typography>
                Kliknięcie w pokemona przenosi do nowej strony.
              </Typography>
            </li>
            <li>
              <Typography>
                Na osobnej stronie dostępna jest także wyszukiwarka pokemonów
              </Typography>
            </li>
          </ul>
        </Typography>
      </Box>
    </Container>
  );
};

export default InfoView;

const useStyles = makeStyles((theme) => ({
  link: {
    color: "#3853ea",
  },
  box: {
    [theme.breakpoints.up("md")]: {
      marginTop: 70,
    },
  },
}));
