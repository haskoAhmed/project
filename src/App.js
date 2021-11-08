import React from "react";
import { useEffect, useState } from "react/cjs/react.development";
import Dash from "./Components/Dash";
// import DashBoard from "./Components/Dashboard";
import Login from "./Components/Login";
import Register from "./Components/Register";
// import Route from "./Components/Route";
import { BrowserRouter as Router , Switch , Route } from "react-router-dom";
import Header from "./Components/Header";

const App = () => {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));
    if (token) setAuthenticated(true);
  }, []);

  const PublicRoutes = () => {
    return (
      <>
        <Router>
          <Switch>
          <Route path="/login" exact component={Login} />

          <Route path="/register" exact component={Register} />
          </Switch>
        </Router>
      </>
    );
  };
  const ProtectedRoutes = () => {
    return (
      <Router>
        <switch>
        <Header />
        <Route path="/dashBoard" exact/>
        <Dash />
        </switch>
      </Router>
    );
  };
  return <div>{authenticated ? <ProtectedRoutes /> : <PublicRoutes />}</div>;
};

export default App;
