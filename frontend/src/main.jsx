import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Sucsess from './sucsess.jsx';


const router = createBrowserRouter([
  {
    path : "/",
    element : <App/>
  },
  {
    path : "/sucsess",
    element : <Sucsess/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>

      <RouterProvider router={router}>
       
      </RouterProvider>
    
  </StrictMode>,
)
