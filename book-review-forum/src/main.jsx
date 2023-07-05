import React from 'react'
import ReactDOM from 'react-dom/client'
import BookPage, {loader as bookDetailLoader} from './routes/BookPage.jsx';
import './index.css'
import ErrorPage from './ErrorPage.jsx';
import Root from './routes/root';
import App from './App.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <App />
      }
    ]
    //loader: rootLoader,
  },
  {
    path: "/books/:id",
    element: <BookPage />,
    errorElement: <ErrorPage />,
    loader: bookDetailLoader
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)