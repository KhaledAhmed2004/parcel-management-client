import { RiMenu2Fill } from "react-icons/ri";
import { IoCartOutline } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa6";
import { useState } from "react";
import NavLinks from "./NavLinks";
import { MdOutlineDeliveryDining } from "react-icons/md";
import { Link } from "react-router-dom";
import { IoIosNotifications } from "react-icons/io";

const MobileNav = () => {
  const [menuIcon, setMenuIcon] = useState(false);

  return (
    <>
      {/* left side */}
      <div
        onClick={() => setMenuIcon(!menuIcon)}
        className="flex-1 md:hidden text-2xl"
      >
        {menuIcon ? <AiOutlineClose /> : <RiMenu2Fill />}
      </div>
      <div
        style={{
          boxShadow: "-5px -5px 9px #ffffff73,5px 5px 7px #5e687949",
        }}
        className={
          menuIcon
            ? "md:hidden absolute top-[4.8rem] right-0 bottom-0 left-0 flex justify-center h-[80vh] bg-[#FFFFFF1A] dark:bg-[#dddddd] text-white ease-in duration-300 text-center items-center rounded-tl-[50px] rounded-bl-[65px] rounded-tr-[65px] rounded-br-[50px] border-2 shadow-2xl backdrop-blur-3xl w-[95%] mx-auto"
            : "md:hidden absolute top-[4.3rem] right-0 left-[-105%] flex text-center justify-center w-full h-[80vh] dark:bg-[#f2a64d] text-white ease-in duration-300 items-center rounded-tl-[50px] rounded-bl-[65px] rounded-tr-[65px] rounded-br-[50px]"
        }
      >
        <ul className="flex flex-col gap-3 mt-2 font-semibold text-2xl text-black">
          <NavLinks />
        </ul>
      </div>
      {/* middle Part || logo */}
      <Link
        to={"/"}
        className="flex-1 md:hidden flex justify-center items-center"
      >
        <MdOutlineDeliveryDining className="text-xl" />
        <h2 className="font-semibold"> Let's Deliver</h2>
      </Link>
      {/* Right part */}
      <div className="flex-1 md:hidden flex justify-end items-center text-lg gap-4">
        <FaRegUser />
        <li className="flex items-center gap-1 drop-shadow-md bg-gray-200 p-[.4rem] rounded-lg hover:scale-95 duration-200 ease-in-out transition-all">
          <IoIosNotifications className="text-xl" /> + 0
        </li>
      </div>
    </>
  );
};

export default MobileNav;
