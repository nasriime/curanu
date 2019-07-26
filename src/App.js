import React from 'react';
import { Provider } from 'react-redux';
import './assets/style/style.scss';
import store from './store';
import Home from './views/Home';

function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

export default App;
