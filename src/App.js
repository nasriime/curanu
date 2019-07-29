import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './assets/style/style.scss';
import store from './store';
import Home from './views/Home';
import ContactUS from './views/ContactUS';

function App() {
  return (
    <Provider store={store}>
       <Router>
        <Route exact path="/" component={Home} />
        <Route path="/contact" component={ContactUS} />
      </Router>
    </Provider>
  );
}

export default App;
