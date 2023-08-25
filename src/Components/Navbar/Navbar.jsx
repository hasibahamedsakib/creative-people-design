import { Link, NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { GoArrowUpRight } from "react-icons/go";
import { useState } from "react";
import TopBar from "./Topbar/TopBar";

const Navbar = () => {
  // modal openar
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <TopBar />
      <nav
        className={` w-full  lg:px-10 lg:py-4  transition-all duration-300 font-Inter flex justify-center`}
      >
        <div className="container">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            {/* website Logo */}
            <div className=" lg:w-52 w-32  p-4 ">
              <Link to="/">
                <img src="/Logo.png" alt="website_logo" />
              </Link>
            </div>
            <div className="px-3 w-full lg:hidden flex justify-between text-white bg-[#5f4ff8] p-3">
              <h2 className="text-2xl uppercase font-bold">creative people</h2>
              <button
                className="lg:hidden block focus:outline-none "
                onClick={toggleNavbar}
              >
                {/* modal open and close */}
                {isOpen ? (
                  <IoMdClose className="w-6 h-6 text-white" />
                ) : (
                  <FaBars className="w-5 h-5 text-white" />
                )}
              </button>
            </div>
            {/* All navLink are hear with active */}
            <ul
              className={`${
                isOpen ? "block" : "hidden"
              } font-inter text-left w-full lg:w-fit  ease-in-out lg:flex space-y-2 lg:space-y-0 lg:text-center  lg:space-x-3 space-x-0 flex flex-col lg:flex-row font-medium text-[20px] text-gray`}
            >
              <NavLink
                className={`${({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "active"
                    : ""} hover:text-secondary border-b-2 lg:border-b-0 hover:lg:border px-3 w-full block`}
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                className={`${({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "active"
                    : ""} hover:text-secondary border-b-2 lg:border-b-0 hover:lg:border px-3 w-full block transition-all duration-300`}
                to="/about"
              >
                About
              </NavLink>
              <NavLink
                className={`${({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "active"
                    : ""} hover:text-secondary border-b-2 lg:border-b-0 hover:lg:border px-3 w-full block transition-all duration-300`}
                to="/services"
              >
                Services
              </NavLink>
              <NavLink
                className={`${({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "active"
                    : ""} hover:text-secondary border-b-2 lg:border-b-0 hover:lg:border px-3 w-full block transition-all duration-300`}
                to="/portfolio"
              >
                Portfolio
              </NavLink>
              <NavLink
                className={`${({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "active"
                    : ""} hover:text-secondary border-b-2 lg:border-b-0 hover:lg:border px-3 w-full block transition-all duration-300`}
                to="/page"
              >
                Page
              </NavLink>
              <NavLink
                className={`${({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "active"
                    : ""} hover:text-secondary border-b-2 lg:border-b-0 hover:lg:border px-3 w-full block transition-all duration-300`}
                to="/blog"
              >
                Blog
              </NavLink>
              <NavLink
                className={`${({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "active"
                    : ""} hover:text-secondary border-b-2 lg:border-b-0 hover:lg:border px-3 w-full block transition-all duration-300`}
                to="/contact"
              >
                Contact
              </NavLink>
            </ul>

            {/* large device visible button */}

            <button className="btn-main flex items-center justify-center space-x-3">
              Free Consultation <GoArrowUpRight />{" "}
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
