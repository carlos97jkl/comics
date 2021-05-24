import React, { useEffect, useState } from "react";
import { createSelector } from "reselect";
import Score from "../components/score";
import config from "../assets/config";
import { getData } from "../redux/actions/request";
import { useSelector, useDispatch } from "react-redux";
import {
  Container,
  Card,
  Typography,
  CardContent,
  Grid,
  IconButton,
} from "@material-ui/core";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { makeStyles } from "@material-ui/core/styles";
const { SET_NEW_COMIC } = config.actions;

const getCurrentComic = (index) =>
  createSelector(
    (state) => state.comics,
    (comics) => (comics.list[index] ? comics.list[index] : null)
  );

const styles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
  },
  content: {
    marginTop: 30,
  },

  img: {
    objectFit: "contain",
    maxWidth: "100%",
  },
  loading: {
    marginTop: "20%",
  },
  card: {
    maxHeight: 400,
    marginTop: 20,
    marginBottom: 20,
    overflowY: "visible",
    minHeight: 400,
  },
}));

const Main = () => {
  const classes = styles();

  const dispatch = useDispatch();
  const [comicState, setComicState] = useState({ currentIndex: 0 });
  const currentComic = useSelector(getCurrentComic(comicState.currentIndex));
  const getcomic = () => {
    let randomNumber = Math.floor(Math.random() * 1000 + 1);

    return getData(`${randomNumber}/info.0.json`, SET_NEW_COMIC);
  };

  useEffect(() => {
    if (currentComic == null) {
      dispatch(getcomic());
    }
  }, [dispatch, currentComic]);

  const nextComic = (index) => {
    setComicState((state) => ({
      ...state,
      currentIndex: index,
    }));
  };

  return (
    <Container className={classes.root}>
      {currentComic != null ? (
        <div>
          <Grid
            className={classes.content}
            container
            spacing={2}
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Grid item md={3}>
              <IconButton
                onClick={() => nextComic(comicState.currentIndex - 1)}
                disabled={comicState.currentIndex === 0}
                variant="contained"
              >
                <ArrowBackIosIcon />
              </IconButton>
            </Grid>
            <Grid
              md={6}
              item
              container
              direction="column"
              justify="center"
              alignItems="center"
            >
              <Typography variant="h4">{currentComic.title}</Typography>
              <Card className={classes.card} elevation={4}>
                <CardContent>
                  <img className={classes.img} src={currentComic.img} alt="" />
                </CardContent>
              </Card>
              <Score
                index={comicState.currentIndex}
                rate={currentComic.rating || 0}
              />
            </Grid>
            <Grid item md={3}>
              <IconButton
                onClick={() => nextComic(comicState.currentIndex + 1)}
                variant="contained"
              >
                <ArrowForwardIosIcon />
              </IconButton>
            </Grid>
          </Grid>
        </div>
      ) : (
        <Typography className={classes.loading} variant="h3">
          Loading...
        </Typography>
      )}
    </Container>
  );
};

export default Main;
