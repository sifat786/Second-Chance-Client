import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import ErrorPage from './../Pages/ErrorPage/ErrorPage';
import Home from './../Pages/Home/Home';
import Login from './../Pages/Login/Login';
import Register from './../Pages/Register/Register';



const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      errorElement: <ErrorPage/>,
      children: [
        {
            index: true,
            element: <Home/>
        },
        {
            path: '/login',
            element: <Login/>
        },
        {
            path: '/register',
            element: <Register/>
        },
        {
            
        }
      ]
    },
    {
        //* User route:
        //* Admin route:
    }



  ]);

  export default router;