import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settigns/Settings";

import { Route, Switch } from "react-router-dom";

function App () {
  return (

      <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Switch>
         <Route exact path="/profile" component={Profile} />
         <Route path="/dialogs" component={Dialogs} />
         <Route path="/news" component={News} />
         <Route path="/music" component={Music} />
         <Route path="/settings" component={Settings} />
        </Switch>
      </div>
    </div>
   )
};

export default App;