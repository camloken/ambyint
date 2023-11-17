import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  /* Remove Strictmode so app doesn't render twice */
  /* <React.StrictMode> */
    <App />
  /* </React.StrictMode>,  */
)
