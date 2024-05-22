import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Routes/Home";
import Community from "./Routes/Community";
import MyPlants from "./Routes/MyPlants";
import Header from "./Components/Header";
import Search from "./Routes/Search";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/community">
          <Community />
        </Route>
        <Route path="search">
          <Search />
        </Route>
        <Route path="my-plants">
          <MyPlants />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
