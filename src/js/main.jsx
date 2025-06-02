import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import '../styles/index.css';
import Timer from './components/Timer'; // Asegúrate de que Timer esté en componentes

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Timer />
  </React.StrictMode>
);
