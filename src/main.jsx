import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './components/Root/Root'
import Home from './components/Home/Home'
import Dashboard from './components/Dashboard/Dashboard'
import Statistic from './components/Statistic/Statistic'
import Wishlist from './components/Wishlist/Wishlist'
import Cart from './components/Cart/Cart'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <h1>Something went wrong!</h1>,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'statistics',
        element: <Statistic />
      },
      {
        path: 'dashboard',
        element: <Dashboard />,
        children: [
          {
            path: 'cart',
            element: <Cart />
          },
          {
            path: 'wishlist',
            element: <Wishlist />
          }
        ]
      },
    ],
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
    </RouterProvider>
  </StrictMode>,
)
