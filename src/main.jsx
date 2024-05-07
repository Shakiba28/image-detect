import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router-dom";
import AppRouter from './routes'





ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={AppRouter}>
      <App />
    </RouterProvider>
  </>
)
