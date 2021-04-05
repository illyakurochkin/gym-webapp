import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from "./imports/store";
import App from './app';
import 'semantic-ui-css/semantic.min.css'
import 'semantic-ui-less/semantic.less'
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
