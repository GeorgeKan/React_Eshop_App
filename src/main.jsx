import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import App from './App.jsx'
import ProductInfo from './Routes/ProductInfo.jsx'
import Collection from './Routes/Collection.jsx'
import Login from './Routes/Login.jsx'
import ErrorPath from './Routes/ErrorPath.jsx'
import Register from './Routes/Register.jsx'
import ContactUs from './Routes/ContactUs.jsx'
import About from './Routes/About.jsx'
import Cart from './Routes/Cart.jsx';
import Checkout from './Routes/Checkout.jsx';


const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPath />
  },
  {
    path: '/product/:id',
    element: <ProductInfo />
  },
  {
    path: '/collection',
    element: <Collection />,
    children: [
      {
        path: ':id',
        element: <Collection />
      }
    ]
  },
  {
    path: '/cart',
    element: <Cart />
  },
  {
    path: '/checkout',
    element: <Checkout />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: 'contact',
    element: <ContactUs />
  },
  {
    path: '/about',
    element: <About />
  }
])


createRoot(document.getElementById('root')).render(
  <RouterProvider router={routes}>
    <App />
    </RouterProvider>
)
