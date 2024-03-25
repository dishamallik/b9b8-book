import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import ListedBooks from './components/ListedBooks/ListedBooks';
import PagesToRead from './components/PagesToRead/PagesToRead';

import Ebook from './components/Ebook/Ebook';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
   
    children: [
      {
        path: '/home',
        element: <Home></Home>
      },
      {
        path: '/listed',
        element: <ListedBooks></ListedBooks>
      },
      {
        path: '/pages' ,
        element: <PagesToRead></PagesToRead>

      },
      {
        path: '/Ebooks',
        element: <Ebook></Ebook>
        
        
        
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
