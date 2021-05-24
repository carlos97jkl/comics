
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
//Components
import Main from "./pages/Main";
import NotFound from "./pages/NotFound";

// redux
import { Provider } from "react-redux";
import store from "./redux/index";

//theme
const theme = createMuiTheme({
  typography: {
    fontFamily: ["Comic Neue", "cursive"].join(","),
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
