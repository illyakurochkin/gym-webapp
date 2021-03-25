import React from 'react';
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import {useAuthorized} from "../imports/hooks/useAuthorized";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";

const App = () => {
  const {authorized} = useAuthorized();

  const renderRouter = () => {
    if (!authorized) {
      return (
        <Switch>
          <Route path="/login" component={SignIn}/>
          <Route path="/signup" component={SignUp}/>
          <Route path="*" render={() => <Redirect to="/login" />} />
        </Switch>
      );
    }

    return (
      <Switch>
        <Route path="*" component={Home}/>
      </Switch>
    );
  }

  return (
    <BrowserRouter>
      {renderRouter()}
    </BrowserRouter>
  );
};

export default App;
