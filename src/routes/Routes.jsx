import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import PrivetRoute from "./PrivetRoute";
import DashboardLayout from "../layouts/DashBoardLayouts";
import BookParcel from "../pages/dashboard/user/BookParcel";
import MyParcels from "../pages/dashboard/user/MyParcels";
import AllUsers from "../pages/dashboard/admin/Allusers";
import Update from "../pages/dashboard/user/Update";
import AllParcels from "../pages/dashboard/admin/AllParcels";
import AllDeliveryMan from "../pages/dashboard/admin/AllDeliveryMan";
import MyReview from "../pages/dashboard/deliveryMan/MyReview";
import MyDeliveryList from "../pages/dashboard/deliveryMan/MyDeliveryList";
import Profile from "../components/dashBoard/Profile";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
  {
    path: "/dashBoard",
    element: (
      <PrivetRoute>
        <DashboardLayout></DashboardLayout>
      </PrivetRoute>
    ),
    children: [
      {
        path: "bookParcel",
        element: <BookParcel></BookParcel>,
      },
      {
        path: "myParcels",
        element: <MyParcels></MyParcels>,
      },
      {
        path: "allUsers",
        element: <AllUsers></AllUsers>,
      },
      {
        path: "update/:id",
        element: <Update></Update>,
        loader: ({ params }) =>
          fetch(
            `https://parcel-management-server-pi.vercel.app/bookParcel/${params.id}`
          ),
      },
      {
        path: "appParcels",
        element: <AllParcels></AllParcels>,
      },
      {
        path: "allDeliveryMan",
        element: <AllDeliveryMan></AllDeliveryMan>,
      },
      {
        path: "myReview",
        element: <MyReview></MyReview>,
      },
      {
        path: "myDeliveryList",
        element: <MyDeliveryList></MyDeliveryList>,
      },
      {
        path: "profile",
        element: <Profile></Profile>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/signUp",
    element: <SignUp></SignUp>,
  },
]);
export default Routes;
