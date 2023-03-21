import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
    createBrowserRouter, Router,
    RouterProvider,
} from "react-router-dom";
import ErrorPage from "./Components/ErrorPage";
import Album from "./Components/Album";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement:<ErrorPage/>
    },
    {
        path:"/album",
        element:<Album/>,
        errorElement:<ErrorPage/>
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

