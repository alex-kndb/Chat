import { CircularProgress } from '@material-ui/core';
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Router } from './components/Router/Router';
import { persistor, store } from './store/index';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={<CircularProgress />}>
        <Router />
      </PersistGate>
    </Provider>
  )
}

export default App;

