import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import ContextProvider from './components/propscontext.jsx'
import './index.css'
import App from './App.jsx'
import Jobs from './pages/jobs.jsx'
import Homepage from './pages/homepage.jsx'
import ScrollToTop from './components/scrolltotop.jsx'
import AboutUs from './pages/aboutus.jsx'
import ContactUs from './pages/contactus.jsx'
import SignUpPage from './pages/signuppage.jsx'
import LoginPage from './pages/loginpage.jsx'



const Layout = ({ children }) => (
  <>
    <ScrollToTop />
    {children}
  </>
);

const router = createBrowserRouter([
  {
    path:"/homepage",
    element: <Layout><Homepage /></Layout>,
  },
  {
    path:"/jobs",
    element:<Layout><Jobs /></Layout>,
  },
  {
    path:"/jobs/:jobId",
    element:<Layout><Jobs /></Layout>,
  },
  {
    path:"/about-us",
    element:<Layout><AboutUs /></Layout>,
  },
  {
    path:"/contactus",
    element:<Layout><ContactUs /></Layout>,
  },
  {
    path:"/",
    element:<Layout><SignUpPage /></Layout>,
  },
  {
    path:"/login",
    element:<Layout><LoginPage /></Layout>,
  }
  
  
  
  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextProvider>
         <RouterProvider router= {router} />
    </ContextProvider>
    
    
  </StrictMode>
)

