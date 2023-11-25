
import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root/Root";
import Home from "../Pages/Home/Home";
import AllClasses from "../Pages/AllClasses/AllClasses";
import TeachOnSkillBoost from "../Pages/TeachOnSkillBoost/TeachOnSkillBoost";
import SignIn from "../Pages/SignIn/SignIn";
import Register from "../Pages/Register/Register";
import Dashboard from "../Pages/Dashboard/Dashboard";

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
                element: <AllClasses></AllClasses>
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
            },{
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            }
        ]

    }
])