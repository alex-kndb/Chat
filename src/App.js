import React from 'react';
import { Provider } from 'react-redux';
import { Router } from './components/Router/Router';
import { store } from './store/index';

function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  )
}

export default App;

