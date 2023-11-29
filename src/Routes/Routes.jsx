
import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root/Root";
import Home from "../Pages/Home/Home";
import AllClasses from "../Pages/AllClasses/AllClasses";
import TeachOnSkillBoost from "../Pages/TeachOnSkillBoost/TeachOnSkillBoost";
import SignIn from "../Pages/SignIn/SignIn";
import Register from "../Pages/Register/Register";

import PrivateRoute from "./PrivateRoutes";
import Details from "../Pages/Details/Details";
import EnrollClass from "../Pages/EnrollClass/EnrollClass";
import MyEnrollClass from "../Pages/MyEnrollClass/MyEnrollClass";
import Dashboard from "../Layout/Dashboard/Dashboard";

export const  router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/classes',
                element: <AllClasses></AllClasses>,
                loader: () => fetch('http://localhost:5000/coursesCount')
            },
            {
                path: '/teach',
                element: <TeachOnSkillBoost></TeachOnSkillBoost>
            },
            {
                path: '/signIn',
                element: <SignIn></SignIn>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/dashboard',
                element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
            },
            {
                path: '/course/:id',
                element: <PrivateRoute><Details></Details></PrivateRoute>
            },
            // user/students routes
            {
                path: '/dashboard/payment/:id',
                element: <PrivateRoute><EnrollClass></EnrollClass></PrivateRoute>
            },
            {
                path: '/dashboard/my-enroll-class',
                element: <PrivateRoute><MyEnrollClass></MyEnrollClass></PrivateRoute>
            }
        ]

    }
])