import React, { useState } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import GraphPage from "./Components/GraphPage";
import LoginPage from "./Components/LoginPage";
import "./App.css";

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
          <Route exact path="/">
            <LoginPage
              log={log}
              logHandler={logHandler}
              nameHandler={nameHandler}
              userName={name}
            />
          </Route>
          <Route path="/graph">
            <GraphPage userName={name} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
