import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Lamp1 from './Lamp1';
import Lamp2 from './Lamp2';
import Lamp3 from './Lamp3';

ReactDOM.render(
  <React.StrictMode>
    <Lamp1 />
    <Lamp2 />
    <Lamp3 />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();