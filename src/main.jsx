import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import ContextProvider from './components/propscontext.jsx'
import './index.css'
import App from './App.jsx'
import Jobs from './pages/jobs.jsx'
import Homepage from './pages/homepage.jsx'
import ScrollToTop from './components/scrolltotop.jsx'



const Layout = ({ children }) => (
  <>
    <ScrollToTop />
    {children}
  </>
);

const router = createBrowserRouter([
  {
    path:"/",
    element: <Layout><Homepage /></Layout>,
  },
  {
    path:"/jobs",
    element:<Layout><Jobs /></Layout>,
  }
  
  
  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextProvider>
         <RouterProvider router= {router} />
    </ContextProvider>
    
    
  </StrictMode>
)

