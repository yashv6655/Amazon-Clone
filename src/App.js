import React, { useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Checkout from "./components/Checkout/Checkout";
import Login from "./components/Login/Login";
import { useStateValue } from "./components/StateProvider/StateProvider";
import { auth } from "./firebase";

export default function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // user is logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  console.log(user);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Navbar />
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Navbar />
            <Home />
          </Route>
          <Route path="*">
            <h1>Error</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
