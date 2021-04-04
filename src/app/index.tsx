import React from 'react';
import {BrowserRouter, Redirect, Route, Router, Switch} from "react-router-dom";
import {useAuthorized} from "../imports/hooks/useAuthorized";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import HeaderMenu from '../imports/modules/HeaderMenu';
import Coaches from "./pages/Coaches";
import Gyms from "./pages/Gyms";
import WorkoutsTypes from "./pages/WorkoutsTypes";
import Subscriptions from './pages/Subscriptions';
import About from "./pages/About";
import Home from "./pages/Home";
import Footer from "../imports/modules/Footer";
import Account from "./pages/Account";
import Workouts from "./pages/Workouts";

const App = () => {
  const {authorized} = useAuthorized();

  return (
    <BrowserRouter>
      <Switch>
        {!authorized && <Route path="/login" component={SignIn}/>}
        {!authorized && <Route path="/signup" component={SignUp}/>}
        <Route
          path="*"
          render={({history}: any) => (
            <Router history={history}>
              <HeaderMenu/>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/gyms" component={Gyms}/>
                <Route path="/coaches" component={Coaches} />
                <Route path="/workouts-types" component={WorkoutsTypes}/>
                <Route path="/subscriptions" component={Subscriptions}/>
                <Route path="/about" component={About} />
                {authorized && <Route path="/profile" component={Account} />}
                {authorized && <Route exact path="/workouts" component={Workouts} />}
                <Route path="*" render={() => <Redirect to="/" />}/>
              </Switch>
              <Footer />
            </Router>
          )}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
