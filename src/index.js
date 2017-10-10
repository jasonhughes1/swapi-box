import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import createHistory from 'history/createBrowserHistory';
import { BrowserRouter as Router } from 'react-router-dom';
const history = createHistory();

ReactDOM.render(
  <Router history={history}>
    <App />
  </Router>,
  document.getElementById('root'));
