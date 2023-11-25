import { Link } from "react-router-dom";

const NavBtn = () => {
  return (
    <div className="flex sm:gap-5 lg:gap-8 uppercase">
      <Link
        style={{
          boxShadow: `
      -2px -2px 8px rgba(255, 255, 255, 1),
      -2px -2px 12px rgba(255, 255, 255, 0.5),
      inset 2px 2px 4px rgba(255, 255, 255, 0.1),
      2px 2px 8px rgba(0, 0, 0, 0.15)
    `,
        }}
        to={"/login"}
        className="bg-[#F29F05] drop-shadow-md text-white hover:scale-105 duration-150 ease-in py-2 px-8 rounded-xl flex items-center justify-center"
      >
        Login
      </Link>
      <Link
        style={{
          boxShadow: `
    -2px -2px 8px rgba(255, 255, 255, 1),
    -2px -2px 12px rgba(255, 255, 255, 0.5),
    inset 2px 2px 4px rgba(255, 255, 255, 0.1),
    2px 2px 8px rgba(0, 0, 0, 0.15)
  `,
        }}
        className="hover:scale-105 shadow-md duration-150 ease-in border-2 border-[#F29F05] py-2 px-8 rounded-xl flex items-center justify-center"
      >
        Sign Up
      </Link>
    </div>
  );
};

export default NavBtn;

NavBtn.js;
