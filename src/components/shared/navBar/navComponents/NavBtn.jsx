import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../provider/AuthProvider";

const NavBtn = () => {
  const { user, logOut } = useContext(AuthContext);
  const [showProfile, setShowProfile] = useState(false);
  return (
    <>
      {user?.email ? (
        <>
          <div
            onClick={() => {
              setShowProfile(!showProfile);
            }}
            className="dropdown dropdown-end"
          >
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  src={
                    user?.photoURL
                      ? user?.photoURL
                      : "https://i.ibb.co/vcQZhpc/1921098.png"
                  }
                />
              </div>
            </label>
            {showProfile && (
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-3 shadow menu menu-sm dropdown-content bg-base-100 rounded-box space-y-2"
              >
                <li>
                  <p>{user?.displayName}</p>
                </li>
                <li>
                  <p>{user?.email}</p>
                </li>
              </ul>
            )}
          </div>
          <button
            onClick={logOut}
            className="bg-[#F29F05] drop-shadow-md text-white transition-all hover:scale-95 ease-in-out duration-200 py-2 px-8 rounded-xl flex items-center justify-center"
          >
            Logout
          </button>
        </>
      ) : (
        <div className="flex sm:gap-5 lg:gap-8 uppercase">
          <Link
            to={"/login"}
            className="bg-[#F29F05] drop-shadow-md text-white transition-all hover:scale-95 ease-in-out duration-200 py-2 px-8 rounded-xl flex items-center justify-center"
          >
            Login
          </Link>
          <Link
            to={"/signUp"}
            className="transition-all hover:scale-95 ease-in-out duration-200 shadow-md border-2 border-[#F29F05] py-2 px-8 rounded-xl flex items-center justify-center"
          >
            Sign Up
          </Link>
        </div>
      )}
    </>
    // <div className="flex sm:gap-5 lg:gap-8 uppercase">
    //   <Link
    //     to={"/login"}
    //     className="bg-[#F29F05] drop-shadow-md text-white transition-all hover:scale-95 ease-in-out duration-200 py-2 px-8 rounded-xl flex items-center justify-center"
    //   >
    //     Login
    //   </Link>
    //   <Link className="transition-all hover:scale-95 ease-in-out duration-200 shadow-md border-2 border-[#F29F05] py-2 px-8 rounded-xl flex items-center justify-center">
    //     Sign Up
    //   </Link>
    // </div>
  );
};

export default NavBtn;

NavBtn.js;
