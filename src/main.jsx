import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Users from './components/Users.jsx';
import UserDetails from './components/UserDetails.jsx';
import Posts from './components/Posts.jsx';
import PostDetails from './components/PostDetails.jsx';
import ErrorPage from './components/ErrorPage.jsx';

const router = createBrowserRouter([

  {
    path:'/',
    element:<Home></Home>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/about',
        element:<About></About>
      },
      {
        path:'/users',
        loader : () => fetch('https://jsonplaceholder.typicode.com/users'),
        element:<Users></Users>
      },
      {
        path:'/contact',
        element:<Contact></Contact>
      },
      {
        path:'/user/:UserId',
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.UserId}`),
        element:<UserDetails></UserDetails>
      },
      {
        path:'/posts',
        loader:() => fetch('https://jsonplaceholder.typicode.com/posts'),
        element:<Posts></Posts>,
      },
      {
        path:'/post/:PostId',
        loader:({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.PostId}`),
        element:<PostDetails></PostDetails>
      }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
       <RouterProvider router={router} />
  </StrictMode>,
)
