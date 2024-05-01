import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import NavHeader from "../../components/Navheader";
import MyCards from "../../components/MyCards";
import Footer from "../../components/MyFooter";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
}));

const cards = [
  {
    id: 1,
    image:
      "https://cdn.pixabay.com/photo/2017/07/10/23/45/cubes-2492010_1280.jpg",
    title: "Cubos Coloridos",
    description:
      "Uma imagem artística de vários cubos coloridos em tons de azul, roxo e rosa.",
  },
  {
    id: 2,
    image:
      "https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg",
    title: "Gato Espreguiçando",
    description:
      "Um gato malhado se espreguiçando sob a luz do sol em um ambiente doméstico.",
  },
  {
    id: 3,
    image:
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
    title: "Árvore ao Pôr do Sol",
    description:
      "Silhueta de uma árvore solitária com um céu vibrante ao pôr do sol ao fundo.",
  },
  {
    id: 4,
    image:
      "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_1280.jpg",
    title: "Estrada Vazia",
    description:
      "Uma longa estrada vazia se estendendo até o horizonte sob um céu nublado.",
  },
  {
    id: 5,
    image: "https://cdn.pixabay.com/photo/2013/07/13/10/07/man-156584_1280.png",
    title: "Silhueta de um Homem",
    description:
      "Silhueta de um homem de pé com um fundo de céu alaranjado ao pôr do sol.",
  },
  {
    id: 6,
    image:
      "https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_1280.jpg",
    title: "Campo de Flores",
    description: "Vista de um vibrante campo de flores roxas sob um céu claro.",
  },
];

function App() {
  const classes = useStyles();

  return (
    <>
      <NavHeader />
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Album layout
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Something short and leading about the collection below—its
              contents, the creator, etc. Make it short and sweet, but not too
              short so folks don&apos;t simply skip over it entirely.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    Main call to action
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Secondary action
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <MyCards data={cards} />
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
