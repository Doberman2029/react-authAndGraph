import React, { useState } from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Header from "./Components/Header";
import GraphPage from "./Components/GraphPage";
import LoginPage from "./Components/LoginPage";
import "./App.css";
import Main from "./Components/Main";

function App() {
  const [log, setLog] = useState(false);
  const [name, setName] = useState();

  const logHandler = () => {
    setLog((prev) => !prev);
    setName();
  };

  const nameHandler = (text) => {
    setName(text);
  };

  return (
    <Router basename="/react-authAndGraph">
      <div className="App">
        <Header logOut={logHandler} log={log} />
        <Switch>
          {log ? <Redirect from="/auth" to="/graph" /> : ""}
          <Route exact path="/">
            <Main name={name} />
          </Route>
          <Route path="/graph">
            <GraphPage userName={name} />
          </Route>
          <Route path="/auth">
            <LoginPage
              log={log}
              logHandler={logHandler}
              nameHandler={nameHandler}
              userName={name}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
