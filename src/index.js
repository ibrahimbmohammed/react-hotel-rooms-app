import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router } from "react-router-dom";
import { ItemProvider } from "./context";
import ScrollToTop from "./components/ScrollToTop";

ReactDOM.render(
  <ItemProvider>
    <Router>
      <ScrollToTop>
        <App />
      </ScrollToTop>
    </Router>
  </ItemProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
