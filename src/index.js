import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from "@fortawesome/free-brands-svg-icons"
import { faXmark, faMagnifyingGlass, faPlus, faAngleRight, faAngleLeft, faCalendar, faClock, faBars } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faXmark, faMagnifyingGlass, faPlus, faAngleRight, faAngleLeft, faCalendar, faClock, faBars)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
