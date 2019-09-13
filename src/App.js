import React from "react";

import "./App.css";
import HomePage from "./pages/HomePage";
import RoomPages from "./pages/RoomPages";
import Singleroom from "./pages/Singleroom";
import ErrorPage from "./pages/ErrorPage";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/rooms" component={RoomPages} />
        <Route exact path="/rooms/:slug" component={Singleroom} />
        <Route component={ErrorPage} />
      </Switch>
    </>
  );
}

export default App;
