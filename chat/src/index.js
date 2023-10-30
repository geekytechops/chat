import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/animate.css';
import './assets/plugins/fontawesome/css/fontawesome.min.css';
import './assets/plugins/fontawesome/css/all.min.css';
import './assets/css/style.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './assets/js/script.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(  
        <BrowserRouter>
        <App />  
        </BrowserRouter>
);
reportWebVitals();
