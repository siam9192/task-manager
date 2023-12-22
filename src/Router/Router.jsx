import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Routes from '../Routes/Routes';
import Home from '../Pages/Home/Home';
import Dashboard from '../Pages/Dashboard/Dashboard';
import MyTask from '../Pages/MyTask/MyTask';
import Login from '../Pages/Login/Login';
import Signup from '../Pages/Signup/Signup';
import AllTasks from '../Components/AllTasks/AllTasks';
import ManageTask from '../Components/ManageTask/ManageTask';
import PrivateRoutes from '../Components/PrivateRoutes/PrivateRoutes';
import Solutions from '../Pages/Solutions/Solutions';
import Resources from '../Pages/Resources/Resources';
import Pricing from '../Pages/Pricing/Pricing';

   const Router = createBrowserRouter([
    {
        path:'/',
        element:<Routes></Routes>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/solutions',
                element:<Solutions></Solutions>
            },
            {
                path:'/resources',
                element:<Resources></Resources>
            },
            {
                path:'/pricing',
                element:<Pricing></Pricing>
            }
        ]
    },
    {
        path:'/dashboard',
        element:<PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
        children:[
            {
                path:'/dashboard/my-task',
                element:<PrivateRoutes><AllTasks></AllTasks></PrivateRoutes>
            },
            {
                path:'/dashboard/manage-task',
                element:<PrivateRoutes><ManageTask></ManageTask></PrivateRoutes>
            }
        ]
    },
   {
    path:'/login',
    element:<Login></Login>
   }
   ,
   {
    path:'/signup',
    element:<Signup></Signup>
   },
   {
    path:'/'
   }
   ])



export default Router;
