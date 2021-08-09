import React, { useContext } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer.js";
import FirstComp from "./components/FirstComp";
import SecondComp from "./components/SecondComp";
import { ToastContext } from "./Context/toastContext";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <FirstComp />
          </Route>
          <Route path="/secondComp">
            <SecondComp />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
