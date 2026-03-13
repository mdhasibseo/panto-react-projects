import React from "react";
import { NavLink } from "react-router";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="pt-10">
      <div className=" bg-base-300">
        <footer className="footer container mx-auto sm:footer-horizontal text-base-content p-10">
          <div>
            <h3 className="text-2xl font-bold">
              <NavLink to="/">Panto</NavLink>
            </h3>
            <p className="max-w-73">
              The advantage of hiring a workspace with us is that givees you
              comfortable service and all-around facilities.
            </p>
          </div>
          <nav>
            <h6 className="footer-title">Services</h6>
            <NavLink className="link link-hover" to="/contact">
              Email Marketing
            </NavLink>
            <NavLink className="link link-hover" to="/contact">
              Campaigns
            </NavLink>
            <NavLink className="link link-hover" to="/contact">
              Marketing
            </NavLink>
            <NavLink className="link link-hover" to="/contact">
              Branding
            </NavLink>
          </nav>
          <nav>
            <h6 className="footer-title">Furniture</h6>
            <NavLink className="link link-hover" to="/shop">
              Beds
            </NavLink>
            <NavLink className="link link-hover" to="/shop">
              Chairs
            </NavLink>
            <NavLink className="link link-hover" to="/shop">
              All
            </NavLink>
          </nav>
          <nav>
            <h6 className="footer-title">Legal</h6>
            <NavLink className="link link-hover">Terms of use</NavLink>
            <NavLink className="link link-hover">Privacy policy</NavLink>
            <NavLink className="link link-hover">Cookie policy</NavLink>
          </nav>
        </footer>
      </div>

      <div className=" bg-base-300">
        <footer className="footer container mx-auto text-base-content border-base-300 border-t px-10 py-4">
          <aside className="grid-flow-col items-center">
            <p>
              &copy; {new Date().getFullYear()} Panto. All rights reserved.
              <br />
            </p>
          </aside>
          <nav className="md:place-self-center md:justify-self-end">
            <div className="grid grid-flow-col gap-4">
              <NavLink
                className="link link-hover"
                target="_black"
                to="https://github.com/mdhasibseo"
              >
                <FaGithub className="w-6 h-6" />
              </NavLink>

              <NavLink
                className="link link-hover"
                target="_black"
                to="https://www.facebook.com/md.hasib.240882"
              >
                <FaFacebook className="w-6 h-6" />
              </NavLink>

              <NavLink
                className="link link-hover"
                target="_black"
                to="https://www.linkedin.com/in/md-hasib-hossain-1258a4366/"
              >
                <FaLinkedin className="w-6 h-6" />
              </NavLink>
            </div>
          </nav>
        </footer>
      </div>
    </footer>
  );
};

export default Footer;
