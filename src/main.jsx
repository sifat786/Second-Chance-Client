import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {RouterProvider} from "react-router-dom";
import router from './Router/Router'
import { ThemeProvider } from "@material-tailwind/react";
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProviders } from './Context/ThemeContext';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>

      <ThemeProvider>
        <ThemeProviders>
          <RouterProvider router={router} />
        </ThemeProviders>
      </ThemeProvider>
      
    </HelmetProvider>
  </React.StrictMode>,
)