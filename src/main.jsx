import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from './App'

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import About from './pages/About';
import Home from './components/Home';
import Shop from './pages/Shop';
import Contract from './pages/Contract';
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
    
      {
    path: "/",
    element: <Home/>,
  },
    {
    path: "/about",
    element: <About/>,
  },
    {
    path: "/shop",
    element: <Shop/>,
  },
    {
    path: "/contact",
    element: <Contract/>,
  },
    {
    path: "/cart",
    element: <Cart/>,
  },

    ]
  },
   
]);

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <CartProvider>
       <RouterProvider router={router} />

    </CartProvider>
    
  </StrictMode>,
)
