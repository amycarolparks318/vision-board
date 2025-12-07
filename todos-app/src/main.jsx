import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router';
import Dash from './components/Dash.jsx';
import Home from './components/Home.jsx';
import Vision from './components/Vision.jsx';
import Planner from './components/Planner.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/todo",
        element: <Dash />
      },
        {
        path: "/vision",
        element: <Vision />
      },
        {
        path: "/planner",
        element: <Planner />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
