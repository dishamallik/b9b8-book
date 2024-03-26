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
import BookDetails from './components/BookDetails/BookDetails';
import Read from './components/Read/Read';
import Wishlist from './components/Wishlist/Wishlist';




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
        element: <ListedBooks></ListedBooks>,
        children:[
          {
            path:'read',
            element: <Read></Read>,
          },
          {
            path: 'wishlist',
            element: <Wishlist></Wishlist>
          }
        ]
        
      },
      {
        path: '/pages' ,
        element: <PagesToRead></PagesToRead>

      },
      {
        path: '/Ebooks',
        element: <Ebook></Ebook>
        
        
        
      },
      {
        path: '/job/:bookId',
        element: <BookDetails></BookDetails>,
        loader: () => fetch('../Book.json'),
      },
      

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
