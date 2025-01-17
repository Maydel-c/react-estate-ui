import HomePage from './pages/homePage/homePage'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import ListPage from './pages/listPage/listPage'
import Layout from './pages/layout/layout'
import SinglePage from './pages/singlePage/singlePage'
import Login from './pages/login/login'
import ProfilePage from './pages/profilePage/profilePage'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element:<HomePage />
        },
        {
          path: "/list",
          element:<ListPage />
        },
        {
          path: "/:id",
          element:<SinglePage />
        },
        {
          path: "/login",
          element:<Login />
        },
        {
          path: "/profile",
          element:<ProfilePage />
        }
      ]
    }    
  ]) 

  return (

    


    <RouterProvider router={router} />
  )
}

export default App