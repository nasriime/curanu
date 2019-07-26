import React from 'react';
import { Provider } from 'react-redux';
import './assets/style/style.scss';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">Hello World!</div>
    </Provider>
  );
}

export default App;
