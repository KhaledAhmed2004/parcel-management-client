import { NavLink } from "react-router-dom";

const navigationLinks = [
  { to: "/", label: "Home" },
  { to: "/dashboard", label: "Dashboard" },
  // { to: "/blog", label: <IoIosNotifications /> },
];

const NavLinks = () => {
  return (
    <>
      {navigationLinks.map((link, index) => (
        <li className="hover:scale-95 duration-200 ease-in-out transition-all" key={index}>
          <NavLink
            to={link.to}
            className={({ isActive }) =>
              isActive ? "underline underline-offset-2" : ""
            }
          >
            {link.label}
          </NavLink>
        </li>
      ))}
    </>
  );
};

export default NavLinks;
