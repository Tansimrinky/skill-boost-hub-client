
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
import MyProfile from "../Pages/MyProfile/MyProfile";
import EnrollClassDetails from "../Pages/EnrollClassDetails/EnrollClassDetails";
import TeacherRequest from "../Pages/AdminPages/TeacherRequest/TeacherRequest";
import AllUsers from "../Pages/AdminPages/TeacherRequest/AllUsers/AllUsers";
import AddClass from "../Pages/AddClass/AddClass";
import AdminAllCLass from "../Pages/AdminAllCLass/AdminAllCLass";

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
                loader: () => fetch('https://skill-boost-hub-server.vercel.app/coursesCount')
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
                path: '/course/:id',
                element: <PrivateRoute><Details></Details></PrivateRoute>
            },
            // user/students routes
            {
                path: '/dashboard/payment/:id',
                element: <PrivateRoute><EnrollClass></EnrollClass></PrivateRoute>
            }
            
        ]

    },
    {
        path: '/dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            // normal student routes
            {
                
                    path: '/dashboard/my-enroll-class',
                    element: <PrivateRoute><MyEnrollClass></MyEnrollClass></PrivateRoute>
                
            },
            {
                path: '/dashboard/my-enroll-class/:id',
                element: <EnrollClassDetails></EnrollClassDetails>,
                loader: () => fetch('https://skill-boost-hub-server.vercel.app/payments')
            },
            {
                path: '/dashboard/my-profile',
                element: <MyProfile></MyProfile>
            },
            // Admin Dashboard
            {
                path: "/dashboard/teacher-request",
                element: <TeacherRequest></TeacherRequest>
            },
            {
                path: "/dashboard/users",
                element: <AllUsers></AllUsers>
            },
            {
                path: "/dashboard/all-classes",
                element: <AdminAllCLass></AdminAllCLass>
            },
            // teacher Dashboard
            {
                path: '/dashboard/add-class',
                element: <AddClass></AddClass>
            },
            {
                path: "/dashboard/profile",
                element: <MyProfile></MyProfile>
            }
        ]
    }
])