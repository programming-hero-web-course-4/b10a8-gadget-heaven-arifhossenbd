import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './components/Root/Root'
import Home from './components/Home/Home'
import Dashboard from './components/Dashboard/Dashboard'
import Statistics from './components/Statistics/Statistics'
import Wishlist from './components/Wishlists/Wishlists'
import Cart from './components/Carts/Carts'
import ErrorPage from './components/ErrorPage/ErrorPage'
import Gadgets from './components/Gadgets/Gadgets'
import GadgetDetails from './components/GadgetDetails/GadgetDetails'
import { ToastContainer } from 'react-toastify'
import Contact from './components/Contact/Contact'
import { HelmetProvider } from 'react-helmet-async'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: () => fetch('/gadget.json'),
    children: [
      {
        path: '/',
        element: <Home />,
        children: [
          {
            path: 'gadgets',
            element: <Gadgets />
          },
        ]
      },
      {
        path: 'gadget/:id',
        element: <GadgetDetails />
      },
      {
        path: 'statistics',
        element: <Statistics />
      },
      {
        path: 'dashboard',
        element: <Dashboard />,
        children: [
          {
            index: true,
            element: <Cart />
          },
          {
            path: 'wishlist',
            element: <Wishlist />
          }
        ]
      },
      {
        path: 'contact',
        element: <Contact />
      }
    ],
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
    <ToastContainer
      position="top-center"
      theme="light"
    />
  </StrictMode>,
)
