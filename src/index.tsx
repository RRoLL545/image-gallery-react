import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './StateManagement';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <div>Works!</div>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);