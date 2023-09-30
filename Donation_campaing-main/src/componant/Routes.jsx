import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../pages/MainLayout";
import Home from "../pages/Home";
import Donation from "../pages/Donation/Donation";
import DonationDetails from "../pages/DonationDetails/DonationDetails";
import ErrorPage from "../pages/Error/ErrorPage";
import Statistic from "../pages/Statistic/Statistic";


const Routes = createBrowserRouter([
    {
        path:'',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: 'donation',
                loader: () => fetch('../donation.json'),
                element: <Donation></Donation>
            },
            {
                path: '/donationCard/:id',
                element: <DonationDetails></DonationDetails>,
                loader: () => fetch('../donation.json')

            },
            {
              path:'/statistic',
              element:<Statistic></Statistic> 
            }

        ]
    }
])
export default Routes;