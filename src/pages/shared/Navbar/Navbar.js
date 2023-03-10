import React from "react";
import Logo from "../../../assets/Logo.png";
import Button from "../../../components/reuseable/Button/Button";
const Navbar = () => {
  const menuItems = (
    <>
      <li>
        <a>HOME</a>
      </li>
      <li tabIndex={0}>
        <a className="justify-between">
          FEATURES
          <svg
            className="fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
          </svg>
        </a>
        <ul className="p-2">
          <li>
            <a>Submenu 1</a>
          </li>
          <li>
            <a>Submenu 2</a>
          </li>
        </ul>
      </li>
      <li>
        <a>DEPARTMENT</a>
      </li>
      <li>
        <a>EVENT</a>
      </li>
      <li>
        <a>CONTACT US</a>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-black">
        <div className="navbar-start">
          <div className="dropdown">
            <label
              tabIndex={0}
              className="btn btn-ghost bg-slate-300 lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 bg-slate-400"
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-400 rounded-box w-52 text-white"
            >
              {menuItems}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">
            <img src={Logo} alt="" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-white p-3">
            {menuItems}
          </ul>
        </div>
        <div className="navbar-end hidden lg:inline">
          <div className="flex">
            <Button>Login</Button>
            <Button>Signup</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
