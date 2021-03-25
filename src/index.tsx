import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import 'semantic-ui-css/semantic.min.css'
import 'semantic-ui-less/semantic.less'
import './index.css';
import { Provider } from 'react-redux';
import store from "./imports/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
