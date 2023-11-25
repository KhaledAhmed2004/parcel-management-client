import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/navBar/Navbar";

const MainLayouts = () => {
  return (
    <div className="max-w-7xl mx-auto pt-4 px-2 sm:px-4 lg:px-0"> 
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayouts;
