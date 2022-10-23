import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import AppBcnc from './AppBcnc';
import './styles/index.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <AppBcnc />
    </React.StrictMode>
  </BrowserRouter>
)
