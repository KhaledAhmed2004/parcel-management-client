import NavBtn from "./navComponents/NavBtn";
import NavLinks from "./navComponents/NavLinks";
import MobileNav from "./navComponents/MobileNav";
import { MdOutlineDeliveryDining } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      style={{
        boxShadow: `
        -2px -2px 8px rgba(255, 255, 255, 1),
        -2px -2px 12px rgba(255, 255, 255, 0.5),
        inset 2px 2px 4px rgba(255, 255, 255, 0.1),
        2px 2px 8px rgba(0, 0, 0, 0.15)
      `,
      }}
      className="sticky flex justify-between items-center backdrop-blur-sm z-20 py-3 px-3 rounded-lg"
    >
      {/* Logo */}
      <Link
        to={"/"}
        className="hidden md:flex lg:flex-1 items-center gap-1 text-gray-800"
      >
        <MdOutlineDeliveryDining className="text-4xl" />
        <h2 className="font-semibold text-xl"> Let's Deliver</h2>
      </Link>

      {/* Navigation Links */}
      <ul className="hidden md:flex md:gap-5 lg:gap-8 items-center lg:flex-1 xl:justify-center md:text-base lg:text-lg font-medium">
        <NavLinks></NavLinks>
        <li className="flex items-center gap-1 drop-shadow-md bg-[#F29F05] p-2 rounded-lg hover:scale-95 duration-200 ease-in-out transition-all text-white">
          <IoIosNotifications className="text-xl" /> + 0
        </li>
      </ul>

      {/* Mod Icon and Navigation Button */}
      <div className="hidden md:flex justify-end items-center md:gap-5 lg:gap-8 lg:flex-1 md:text-base lg:text-lg font-medium">
        <NavBtn />
      </div>
      {/* Mobile screen navbar */}
      <MobileNav />
    </nav>
  );
};

export default Navbar;
