import React from 'react';
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
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
import Profile from "./pages/Profile";
import Workouts from "./pages/Workouts";
import CreateWorkout from "./pages/CreateWorkout";
import MyGyms from "./pages/MyGyms";

const App = () => {
  const {authorized, role} = useAuthorized();

  const renderRouter = () => (
    <>
      <HeaderMenu/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/gyms" component={Gyms}/>
        <Route path="/coaches" component={Coaches}/>
        <Route path="/workouts-types" component={WorkoutsTypes}/>
        <Route path="/subscriptions" component={Subscriptions}/>
        <Route path="/about" component={About}/>
        {authorized && <Route path="/profile" component={Profile}/>}
        {authorized && <Route exact path="/workouts" component={Workouts}/>}
        {role === 'ROLE_CLIENT' && <Route path="/create-workout" component={CreateWorkout}/>}
        {role === 'ROLE_COACH' && <Route path="/my-gyms" component={MyGyms} />}
        {/*{role === 'ROLE_GYM' && <Route path="/my-coaches" component={MyCoaches} />}*/}
        <Route path="*" render={() => <Redirect to="/"/>}/>
      </Switch>
      <Footer/>
    </>
  );

  return (
    <BrowserRouter>
      <Switch>
        {!authorized && <Route path="/login" component={SignIn}/>}
        {!authorized && <Route path="/signup" component={SignUp}/>}
        <Route path="*" render={renderRouter}/>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
