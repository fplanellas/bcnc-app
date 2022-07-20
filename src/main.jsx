import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import { PlayersApp } from './PlayersApp'
import './styles/index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>  
    <BrowserRouter>
      <PlayersApp />
    </BrowserRouter>
  </React.StrictMode>
)
