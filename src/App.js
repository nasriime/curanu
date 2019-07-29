import React from 'react';
import { Provider } from 'react-redux';
import './assets/style/style.scss';
import store from './store';
import Home from './views/Home';
// import ContactUS from './views/ContactUS';

function App() {
  return (
    <Provider store={store}>
      <Home />
      {/* <ContactUS/> */}
    </Provider>
  );
}

export default App;
