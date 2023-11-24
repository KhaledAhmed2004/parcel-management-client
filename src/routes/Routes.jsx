import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
  },
]);
export default Routes;
