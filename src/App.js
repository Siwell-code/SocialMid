import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settigns/Settings";
import { Route, Switch } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";

function App(props) {
  return (
    < div className="app-wrapper" >
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Switch>
          <Route exact path="/profile"
            render={ () => <Profile />} />
          <Route path="/dialogs"
            render={ () => <DialogsContainer />} />
          <Route path="/users"
            render={ () => <UsersContainer/>} />
          <Route path="/news"
            render={ () => <News />} />
          <Route path="/music"
            render={ () => <Music />} />
          <Route path="/settings"
            render={ () => <Settings />} />
        </Switch>
      </div>
    </div >
  )
};

export default App;