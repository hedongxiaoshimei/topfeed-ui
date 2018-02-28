import React from 'react';
import ReactDOM from 'react-dom';
import App from './page';
import { BrowserRouter as Router } from 'react-router-dom';
import './styles/base.scss';
import './styles/prism.scss';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
