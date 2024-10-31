import { NavLink } from "react-router-dom";

const NavBar = () => {
  const menus = (
    <>
      <li>
        <a>
          <NavLink to="/">Home</NavLink>
        </a>
      </li>
      <li>
        <a>
          <NavLink to="/lists">Listed Books</NavLink>
        </a>
      </li>
      <li>
        <a>
          <NavLink to="/Reads">Pages to Read</NavLink>
        </a>
      </li>
    </>
  );
  return (
    <div className="w-11/12 md:w-4/5 mx-auto navbar bg-base-100 my-3">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className=" w-36 h-28 menu-sm dropdown-content bg-base-100 rounded-box flex flex-col gap-y-4"
          >
            {menus}
          </ul>
        </div>
        <h3 className="text-2xl font-bold">Book Vibe</h3>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className=" menu-horizontal gap-x-8">{menus}</ul>
      </div>
      <div className="navbar-end gap-4">
        <a className="btn bg-[#23BE0A] text-white hover:text-black">Sign In</a>
        <a className="btn bg-[#59C6D2] text-white hover:text-black">Sign Up</a>
      </div>
    </div>
  );
};

export default NavBar;
