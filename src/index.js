import store from './redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router} from 'react-router-dom';
import { Provider } from 'react-redux';

let rerenderEntireTree = (state) => {
const root = ReactDOM.createRoot (document.getElementById ('root'));
root.render(
  <Router>
  <React.StrictMode>
    <Provider store={store}>
    <App state={state} dispatch={store.dispatch.bind(store)} store={store} />
    </Provider>
  </React.StrictMode>
 </Router>);
}

rerenderEntireTree(store.getState());

store.subscribe(() => {
  let state = store.getState();
  rerenderEntireTree(state);
});

