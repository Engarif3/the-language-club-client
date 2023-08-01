import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import Payment from "../pages/Dashboard/Payment/Payment";
import ErrorPage from "../pages/Errorpage/ErrorPage";
import Instructors from "../pages/Instructors/Instructors";
import Courses from "../pages/Courses/Courses";
import AddClass from "../pages/Dashboard/InstructorDashboard/AddClass";
import MyClass from "../pages/Dashboard/InstructorDashboard/MyClass";
import EnrolledStudents from "../pages/Dashboard/InstructorDashboard/EnrolledStudents";
import Feedback from "../pages/Dashboard/InstructorDashboard/Feedback";
import ManageClass from "../pages/Dashboard/AdminDashboard/ManageClass";
import ManageUsers from "../pages/Dashboard/AdminDashboard/ManageUsers";
import MySelectedClasses from "../pages/Dashboard/UserDashboard/MySelectedClasses";
import MyEnrolledClasses from "../pages/Dashboard/UserDashboard/MyEnrolledClasses";
import PaymentHistory from "../pages/Dashboard/UserDashboard/PaymentHistory";
import UpdateClass from "../pages/Dashboard/InstructorDashboard/UpdateClass";
import Appointment from "../pages/Appointment/Appointment";
import DashboardHome from "../Layout/DashboardHome";




  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        }, 
        {
          path: 'instructors', 
          element:<Instructors></Instructors>
        },
        {
          path: 'classes',
          element: <Courses></Courses>
        },
        {
          path: '/appointment/:id',
          element: <Appointment></Appointment>,
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'signup',
          element: <SignUp></SignUp>
        }
      ]
    },
    //==========================================================================================================
    //==========================================================================================================
    {
      path: 'dashboard',
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>, 
      children: [
        {
          path: 'home',
          element: <DashboardHome></DashboardHome>
        },


        // student routes
        {
          path: 'my-selected-classes',
          element: <MySelectedClasses></MySelectedClasses>
        },
        {
          path: 'my-enrolled-classes',
          element: <MyEnrolledClasses></MyEnrolledClasses>
        },
        {
          path: 'payment-history',
          element: <PaymentHistory></PaymentHistory>
        },
        {
        path:'payment',
        element: <Payment></Payment>,
        },

        
        //Instructor routes
        {
          path: 'addclass',
          element: <AddClass></AddClass>
        },
        {
          path: 'myclass',
          element: <MyClass></MyClass>
        },
        {
          path: 'enrolled-students',
          element: <EnrolledStudents></EnrolledStudents>
        },
        {
          path: 'feedback/:id',
          element: <Feedback></Feedback>
        },
        {
          path: 'update-class/:id',
          element: <UpdateClass></UpdateClass>
        },

      
        // admin routes
        {
          path: 'manage-class',
          element: <ManageClass></ManageClass>
        },
        {
          path: 'manage-users',
          element: <ManageUsers></ManageUsers>
        }
      ]
    }
  ]);