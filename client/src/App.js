import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Saved from "./pages/saved";
import Search from "./pages/search";
import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";
import { Container, Row, Col } from "./components/Grid";
import "./style.css";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Container>
        <Jumbotron>
              <h1 id="text">React Google Book Search</h1>
              <h3>Search for and save books of interest</h3>
            </Jumbotron>
            </Container>
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/saved" component={Saved} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;