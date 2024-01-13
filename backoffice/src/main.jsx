import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import './index.css'
import Settings from './Pages/Settings.jsx';
import Create from './Pages/Create.jsx';
import Blogs from './Pages/Blogs.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {path: "Blogs",
       element: <Blogs/>
      },
      {
        path: "Create",
        element: <Create/>
      },
      {
        path: "settings",
        element: <Settings/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);