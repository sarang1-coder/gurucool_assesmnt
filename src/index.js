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
import Error from './components/pages/Error';
import NotFound from './components/pages/NotFound';
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
        path:'/error',
        element:<Error/>
      },
       {
        // Catch-all route for any other URLs
        path: '*',
        element: <NotFound />, // Replace with your error component or "Not Found" page
      },
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


