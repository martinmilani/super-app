import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Search from "./Pages/Search";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return window.localStorage.getItem("token") ? (
                <Redirect to="/home" />
              ) : (
                <Redirect to="/login" />
              );
            }}
          />
          <Route exaxt path="/login" component={Login}></Route>
          <>
            <Navbar />

            <Route
              exact
              path="/home"
              component={() => (
                <Home authorized={window.localStorage.getItem("token")} />
              )}
            ></Route>
            <Route
              exact
              path="/search"
              component={() => (
                <Search authorized={window.localStorage.getItem("token")} />
              )}
            ></Route>
          </>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
