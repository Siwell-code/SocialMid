import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router} from 'react-router-dom';
import {addPost} from './redux/state';


export let rerenderEntireTree = (state) => {

const root = ReactDOM.createRoot (document.getElementById ('root'));
root.render(
  <Router>
  <React.StrictMode>
    <App state={state} addPost={addPost}/>
  </React.StrictMode>
 </Router>);
}

