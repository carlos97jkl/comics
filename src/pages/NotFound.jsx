import React from "react";
import {
  Container,
  Typography,
  Grid,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
const styles = makeStyles((theme) => ({
  root: {
    marginBottom: 20,
    marginTop: 50,
  },
  title: {
    marginBottom: 10,
  },
  button: {
    borderRadius: 30,
  },
}));

const NotFound = () => {
  const classes = styles();
  const history = useHistory();
  return (
    <Container maxWidth="sm">
      <Grid container direction="column" justify="center" alignItems="center">
        <Grid item className={classes.root}>
          <img src={"https://imgs.xkcd.com/comics/duty_calls.png"} alt="" />
        </Grid>
        <Grid item className={classes.title}>
          <Typography variant="h4">Page not found</Typography>
        </Grid>
        <Grid item>
          <Button
            onClick={() => {
              history.push("/");
            }}
            className={classes.button}
            variant="outlined"
          >
            Back to home
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default NotFound;
