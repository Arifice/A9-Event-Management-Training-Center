import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home";
import Login from "../Components/Login";
import Register from "../Components/Register";
import About from "../Components/About";
import Success from "../Components/Success";
import CourseDetails from "../Components/CourseDetails";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../Components/ErrorPage";

const routes=createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
            {
                path: '/',
                element: <Home></Home>,  
                loader:()=> fetch('course.json')           
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/about',
                element: <PrivateRoute><About></About></PrivateRoute>
            },
            {
                path: '/success',
                element: <PrivateRoute><Success></Success></PrivateRoute>
            },
            {
                path: '/:id',
                loader:()=>fetch('course.json'),
                element: <PrivateRoute> <CourseDetails></CourseDetails> </PrivateRoute>
            }
        ]
    }
])
export default routes;