import React from 'react';
import {Provider} from 'react-redux';
import Router from './config/router';
import store from './store/Store';
const App = () => {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
};

export default App;
