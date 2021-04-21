import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import globalState from './reducer/Global';

const store = configureStore({
  reducer: {
    global: globalState,
  },
  middleware: getDefaultMiddleware(),
  devTools: true,
});

export default store;
