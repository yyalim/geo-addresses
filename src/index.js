import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppContainer from './Components/AppContainer';
import Store from './Components/Store';

ReactDOM.render(
  <React.StrictMode>
    <Store>
      <AppContainer />
    </Store>
  </React.StrictMode>,
  document.getElementById('root')
);
