import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root.jsx';
import Home from './Components/Home.jsx';
import ErrorPage from './ErrorPage';
import AuthProvider from './Components/Provider/AuthProvider';
import Register from './Components/Authentication/Register';
import Login from './Components/Authentication/Login';
import AddProduct from './Components/AddProduct';
import SingleBrands from './Components/Brand/SingleBrands';
import Details from './Components/Singledetail/Details';
import Update from './Components/Update';
import Carts from './Components/Cart/Carts';
import Private from './Components/Private';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },

      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },

      {
        path: '/add',
        element: <Private><AddProduct></AddProduct></Private>
      },

      {
        path: '/brands/:brand',
        element: <SingleBrands></SingleBrands>,
        loader: () => fetch('https://brand-ass-10-server-qnopig852-mahmuda-sultanas-projects.vercel.app/products')
      },

      {
        path: '/products/:id',
        element: <Private><Details></Details></Private>,
        loader: ({ params }) => fetch(`https://brand-ass-10-server-qnopig852-mahmuda-sultanas-projects.vercel.app/products/${params.id}`)
      },

      {
        path: '/update/:id',
        element: <Private><Update></Update></Private>,
        loader: ({ params }) => fetch(`https://brand-ass-10-server-qnopig852-mahmuda-sultanas-projects.vercel.app/products/${params.id}`)
      },

      {
        path: '/cart',
        element: <Carts></Carts>,
        loader: () => fetch('https://brand-ass-10-server-qnopig852-mahmuda-sultanas-projects.vercel.app/cart')
      }
     
      
     
      


    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className=' max-w-[1400px] mx-auto'> 
  <React.StrictMode>
    <AuthProvider><RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>
  </div>
)


