import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './store/Store';
import { BrowserRouter as Router } from 'react-router-dom'; // Add this import

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router> {/* Wrap your app in a Router */}
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
);

reportWebVitals();
