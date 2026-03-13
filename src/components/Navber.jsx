import React, { useEffect, useState } from "react";
import { NavLink } from "react-router";

const Navber = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  
  return (
    <div
      className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? "bg-white shadow-lg" : "bg-transparent"}`}
    >
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          {/* Mobile Menu */}
          <div className=" text-black dropdown lg:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-5 w-5 ${scrolled ? "text-black" : "text-white"}`}
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
              className="menu menu-lg dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
            ><li>
              <NavLink
                to="/shop"
                className={({ isActive }) =>
                  isActive ? "text-orange-400" : ""
                }
              >
                Shop
              </NavLink>
            </li>
         
            <li>
               <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "text-orange-400" : ""
                }
              >
                About Us
              </NavLink>
            </li>
            <li>
                <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "text-orange-400" : ""
                }
              >
                Contact
              </NavLink>
            </li>
            </ul>
          </div>

          {/* Logo */}
          <p
            className={`text-xl font-bold transition-all duration-500 ${scrolled ? "text-black" : "text-white"}`}
          >
            <NavLink
                to="/"
                
              >
               Panto
              </NavLink>
          </p>
        </div>

        {/* Desktop Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul
            className={`menu menu-horizontal px-1 transition-all duration-500 ${scrolled ? "text-black" : "text-white"}`}
          >
            <li>
              <NavLink
                to="/shop"
                className={({ isActive }) =>
                  isActive ? "text-orange-400" : ""
                }
              >
                Shop
              </NavLink>
            </li>
         
            <li>
               <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "text-orange-400" : ""
                }
              >
                About Us
              </NavLink>
            </li>
            <li>
                <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "text-orange-400" : ""
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="navbar-end">
          
        </div>
      </div>
    </div>
  );
};

export default Navber;
