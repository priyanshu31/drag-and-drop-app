import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery-ui-dist/jquery-ui';
import 'jquery/dist/jquery'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

