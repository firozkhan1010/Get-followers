import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Sucsess from './sucsess.jsx';
import Component from './component.jsx';
import WhatsAppShare from './WhatsAppShare.jsx';



const router = createBrowserRouter([
  {
    path : "/",
    element : <App/>
  },
  {
    path : "whatsapp-share",
    element: <WhatsAppShare/>
  },
  {
    path : "/sucsess",
    element : <Sucsess/>
  },
  {
    path : "/component",
    element : <Component/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>

      <RouterProvider router={router}>
       
      </RouterProvider>
    
  </StrictMode>,
)
