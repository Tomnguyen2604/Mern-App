import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSageMiddleware from 'redux-saga';
import reducer from './redux/reducers';
import mySaga from './redux/sagas';

const sageMiddleware = createSageMiddleware();

const store = createStore(reducer, applyMiddleware(sageMiddleware));

sageMiddleware.run(mySaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

