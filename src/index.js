import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import Practice from './Practice';
import App from './App';
// import NavbarPractice  from './components/NavbarPractice';
// import TextUtils from './components/TextUtils';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <NavbarPractice />
    <TextUtils /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
