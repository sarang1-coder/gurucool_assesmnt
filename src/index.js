import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from "./store/appStore"
import {createBrowserRouter as Router,RouterProvider,Outlet, Route } from "react-router-dom"
import Main from './components/Body/Main';
import Login from './components/authetication/Login';
import Home from './components/pages/Home';
import Cart from './components/Carts/Cart';
import Item from './components/Carts/Item';
import CartList from './components/Carts/CartList';
import Error from './components/pages/Error';
import About from './components/pages/About';
import { Provider } from 'react-redux';



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
  <Provider store={store}>
    <RouterProvider router={appRouter}>
      <App />
    </RouterProvider>
  </Provider>
);


