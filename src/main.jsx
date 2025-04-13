import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import ContextProvider from './components/propscontext.jsx'
import './index.css'
import App from './App.jsx'
import Jobs from './pages/jobs.jsx'
import Homepage from './pages/homepage.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element: <Homepage/>
  },
  {
    path:"/jobs",
    element: <Jobs/>
  },
  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextProvider>
         <RouterProvider router= {router} />
    </ContextProvider>
    
    
  </StrictMode>
)

