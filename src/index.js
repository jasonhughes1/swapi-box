import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import { BrowserRouter , Route } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route component={App} />
    </div>
  </BrowserRouter >,
  document.getElementById('root'));
