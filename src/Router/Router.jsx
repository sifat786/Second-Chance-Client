import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import ErrorPage from './../Pages/ErrorPage/ErrorPage';
import Home from './../Pages/Home/Home';
import Login from './../Pages/Login/Login';
import Register from './../Pages/Register/Register';
import PetListing from "@/Pages/PetListing/PetListing";
import DonationCampaigns from "@/Pages/DonationCampaigns/DonationCampaigns";



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
          path: '/register',
          element: <Register/>
        },
        {
          path: '/login',
          element: <Login/>
        },
        {
            path: '/petListing',
            element: <PetListing/>
        },
        {
          path: '/donationCampaigns',
          element: <DonationCampaigns/>
        }
      ]
    },
    {
      //* User route:
      //* Admin route:
    }



  ]);

  export default router;