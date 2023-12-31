import { useContext, useState } from "react";
import MenuItem from "./MenuItem";
import ToggleBtn from "../btn/ToggleBtn";
import { GrLogout } from "react-icons/gr";
import { FcSettings } from "react-icons/fc";
import { AiOutlineBars } from "react-icons/ai";
import { GiCardboardBoxClosed } from "react-icons/gi";
import { BsGraphUp } from "react-icons/bs";
import { FaBoxOpen } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdOutlineDeliveryDining } from "react-icons/md";
import { AuthContext } from "../../../provider/AuthProvider";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useRole from "../../../hooks/useRole";
import UserMenu from "./sidebarMenu/UserMenu";
import AdminMenu from "./sidebarMenu/AdminMenu";
import DeliveryManMenu from "./sidebarMenu/DeliveryManMenu";

const Sidebar = () => {
  const [role] = useRole();
  console.log("role----->", role);
  const { logOut } = useContext(AuthContext);
  const [toggle, setToggle] = useState(false);
  const [isActive, setActive] = useState(false);

  //   For guest/host menu item toggle button
  const toggleHandler = (event) => {
    setToggle(event.target.checked);
  };
  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <>
      {/* Small Screen Navbar */}
      <div className="bg-gray-100 text-gray-800 flex justify-between md:hidden">
        <div>
          <div className="block cursor-pointer p-4 font-bold">
            <Link
              to={"/"}
              className="hidden md:flex lg:flex-1 items-center gap-1 text-gray-800"
            >
              <MdOutlineDeliveryDining className="text-4xl" />
              <h2 className="font-semibold text-xl"> Let's Deliver</h2>
            </Link>
          </div>
        </div>

        <button
          onClick={handleToggle}
          className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-200"
        >
          <AiOutlineBars className="h-5 w-5" />
        </button>
      </div>
      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && "-translate-x-full"
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          <div>
            <div className="w-full hidden md:flex px-4 py-2 shadow-lg rounded-lg justify-center items-center bg-gray-200 mx-auto">
              <div className="block cursor-pointer p-4 font-bold">
                <Link
                  to={"/"}
                  className="hidden md:flex lg:flex-1 items-center gap-1 text-gray-800"
                >
                  <MdOutlineDeliveryDining className="text-4xl" />
                  <h2 className="font-semibold text-xl"> Let's Deliver</h2>
                </Link>
              </div>
            </div>
          </div>

          {/* Nav Items */}
          <div className="flex flex-col justify-between flex-1 mt-6">
            {/* If a user is host */}
            {/* <ToggleBtn toggleHandler={toggleHandler} /> */}
            <nav>
             
              {/* user Menu */}
              {role === "user" && <UserMenu></UserMenu>}
              {/* deliveryMan Menu */}
              {role === "deliveryMan" && <DeliveryManMenu></DeliveryManMenu>}
              {/* admin Menu */}
              {role === "admin" && <AdminMenu></AdminMenu>}
            </nav>
          </div>
        </div>

        <div>
          <hr />

          <MenuItem
            icon={FcSettings}
            label="Profile"
            address="/dashboard/profile"
          />
          <button
            onClick={logOut}
            className="flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform"
          >
            <GrLogout className="w-5 h-5" />

            <span className="mx-4 font-medium">Logout</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
