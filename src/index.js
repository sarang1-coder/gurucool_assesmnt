import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

import {createBrowserRouter as Router,RouterProvider,Outlet, Route } from "react-router-dom"
import Main from './components/Body/Main';
import Login from './components/authetication/Login';
import Home from './components/pages/Home';
import Cart from './components/Carts/Cart';
import Item from './components/Carts/Item';
import CartList from './components/Carts/CartList';
import Error from './components/pages/Error';
import About from './components/pages/About';

const appRouter=Router([
  {
    path:'/',
    element:<Main/>,
    children:[
      {
        path:'/',
        element:<Login/>
      },
      {
        path:'/home',
        element:<Home/>
      },
      {
        path:'/about',
        element:<About/>
      },
      {
        path:'/cart',
        element:<Cart/>
      },
      {
        path:'/item_list',
        element:<CartList/>
      },
      {
        path:'/items/:id',
        element:<Item/>
      },
      {
        path:'/error',
        element:<Error/>
      }
    ]
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={appRouter}/>
);

