import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'semantic-ui-css/semantic.min.css';
import { Provider } from 'react-redux';
import Store from './Store/Store';




ReactDOM.render(
 <Provider store={Store}>
    <App />
    </Provider>
 
,
  document.getElementById('root')
);

reportWebVitals();
