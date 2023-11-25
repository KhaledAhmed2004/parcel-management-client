import { Link } from "react-router-dom";

const NavBtn = () => {
  return (
    <div className="flex sm:gap-5 lg:gap-8 uppercase">
      <Link
        to={"/login"}
        className="bg-[#F29F05] drop-shadow-md text-white transition-all hover:scale-95 ease-in-out duration-200 py-2 px-8 rounded-xl flex items-center justify-center"
      >
        Login
      </Link>
      <Link className="transition-all hover:scale-95 ease-in-out duration-200 shadow-md border-2 border-[#F29F05] py-2 px-8 rounded-xl flex items-center justify-center">
        Sign Up
      </Link>
    </div>
  );
};

export default NavBtn;

NavBtn.js;
