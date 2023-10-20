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
        element: <AddProduct></AddProduct>
      },

      {
        path: '/brands/:brand',
        element: <SingleBrands></SingleBrands>,
        loader: () => fetch('http://localhost:5000/products')
      },

      {
        path: '/products/:id',
        element: <Details></Details>,
        loader: ({ params }) => fetch(`http://localhost:5000/products/${params.id}`)
      },

      {
        path: '/update/:id',
        element: <Update></Update>,
        loader: ({ params }) => fetch(`http://localhost:5000/products/${params.id}`)
      }
     
      
     
      


    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider><RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>,
)


