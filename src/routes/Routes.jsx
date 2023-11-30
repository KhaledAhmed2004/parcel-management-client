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
          fetch(`http://localhost:5000/bookParcel/${params.id}`),
      },
      {
        path: "appParcels",
        element: <AllParcels></AllParcels>,
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
