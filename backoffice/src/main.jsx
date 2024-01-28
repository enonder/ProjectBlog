import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Settings from './Pages/Settings.jsx'
import Create from './Pages/Create.jsx'
import Blogs from './Pages/Blogs.jsx'
import Home from './Pages/Home.jsx'
import SignIn from './Components/Auth/SignIn.jsx'
import SignUp from './Components/Auth/SignUp.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'home',
        element: <Home />,
      },
      { path: 'blogs', element: <Blogs /> },
      {
        path: 'create',
        element: <Create />,
      },
      {
        path: 'settings',
        element: <Settings />,
      },
    ],
  },
  {
    path: '/login',
    element: <SignIn />,
    children: [],
  },
  {
    path: '/signup',
    element: <SignUp />,
    children: [],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
