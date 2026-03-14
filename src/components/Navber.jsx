import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router";
import { IoBagHandle } from "react-icons/io5";
import { CartContext } from "../context/CartContext";
import Swal from "sweetalert2";
import { text } from "framer-motion/client";

const Navber = () => {
  const [scrolled, setScrolled] = useState(false);
  // Handle scroll event to change navbar style

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

  // cart show function
  const cartShow = ({cart, clear}) => {
    
   if (cart.length === 0) {
    Swal.fire({
      title: "Cart is Empty!",
      icon: "warning",
    });
    return;
  }

  const itemsHTML = cart.map((item) => `
    <div style="border-bottom: 1px solid #eee; padding: 8px 0; text-align:left">
      <b>${item.name}</b> (${item.category})<br/>
      💰 Price: $${item.price}<br/>
      ⭐ Rating: ${item.rating}
    </div>
  `).join("");

  // Calculate total price
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  Swal.fire({
    title: "🛒 Your Cart",
    // html content with items and total price
    html: `
      ${itemsHTML}
      <div style="margin-top: 12px; font-size: 18px; font-weight: bold;">
       Total: $${totalPrice.toFixed(2)}  
      </div>
      
    `,
    icon: "success",
    confirmButtonText: "OK",
    showCancelButton: true,
    cancelButtonText: "Clear Cart",
  }).then((result) => {
    if (result.isDismissed) {
      clear(); // Clear cart if user clicks "Clear Cart"
      Swal.fire({
        title: "Cart Cleared!",
        icon: "success",
      });
    }})
    
    
   
  }

  // cart count state
  const { cartCount , cartItems, clearCart} = useContext(CartContext);
  
  
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

          {/* Logo */}
          <p
            className={`text-xl font-bold transition-all duration-500 ${scrolled ? "text-black" : "text-white"}`}
          >
            <NavLink to="/">Panto</NavLink>
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
        
        <div onClick={() => cartShow({ cart: cartItems , clear: clearCart})}  className="navbar-end">
          <div className="relative">
            <IoBagHandle className={` ${scrolled ? "text-black" : "text-white"}`} />
            <sup className="absolute -top-2 -right-2 bg-[#E58411] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
              {cartCount}
            </sup>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navber;
