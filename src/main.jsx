import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router/dom'
import { createBrowserRouter } from 'react-router'
import RootLayout from './layout/RootLayout'
import TimeLine from './pages/timeline/TimeLine'
import Stats from './pages/stats/Stats'
import NotFoundPage from './pages/notfoundpage/NotFoundPage'
import HomePage from './pages/homepage/HomePage'
import FriendDetails from './pages/friendDetails/FriendDetails'
import { ToastContainer } from 'react-toastify'
/* step-2*/

const router= createBrowserRouter(
  [
    {
      path:'/',
      element: <RootLayout/>,/*step-5 after creating RootLayout.jsx*/
      /*step-6*/
      children: [
        {
          path:'/',
          element: <HomePage/>,
        },
        { /*step-8 after making TimeLine.jsx, update it in path and element and import it*/
          path:'/timeline',
          element: <TimeLine/>
        },
        { /*step-9 after making Stats.jsx, update it in path and element and import it*/
          path:'/stats',
          element: <Stats/>
        },
      {
        path: "/friend/:id",
        element: <FriendDetails />
      }
      ],
      errorElement:<NotFoundPage/> /*step-14 import after making it*/
    },
    
  ]
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/*step-1*/}
    <RouterProvider router={router} />
  </StrictMode>,
)
