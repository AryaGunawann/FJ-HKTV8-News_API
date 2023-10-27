import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import SearchBar from "../SearchBar";
import CNavLink from "./NavLink";
import { motion } from "framer-motion";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    setNav(!nav);
  };

  const navItems = [
    { item: "Indonesia", to: "/Indonesia" },
    { item: "Programming", to: "/Programming" },
    { item: "Covid-19", to: "/Covid-19" },
    { item: "Favorites", to: "/Favorites" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white border-gray-200 dark:bg-gray-200"
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-black">
            Ne<span className="text-red-500">ws</span>
          </span>
        </Link>
        <div className="flex md:order-2">
          <button
            type="button"
            data-collapse-toggle="navbar-search"
            aria-controls="navbar-search"
            aria-expanded="false"
            className="md:hidden text-gray-500 dark:text-gray-400 hover-bg-gray-100 dark-hover-bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1"
            onClick={toggleNav}
          >
            {nav ? (
              <FaTimes className="text-xl" />
            ) : (
              <FaBars className="text-xl" />
            )}
            <span className="sr-only">Toggle Menu</span>
          </button>
          <div className="relative hidden md:block">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"></div>
            <SearchBar />
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
            nav ? "block" : "hidden"
          }`}
        >
          <div className="relative mt-3 md:hidden">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"></div>
            <SearchBar />
          </div>
          <motion.ul
            initial="hidden"
            animate="visible"
            variants={navItemsVariants}
            className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-900 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-200 md:dark:bg-gray-200 dark:border-gray-200"
          >
            {navItems.map((item, index) => (
              <motion.li key={index} variants={navItemVariants}>
                <CNavLink item={item.item} to={item.to} />
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Navbar;

const navItemsVariants = {
  hidden: {
    transition: {
      staggerChildren: 0.5,
    },
  },
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const navItemVariants = {
  hidden: { opacity: 0, yx: -30 },
  visible: { opacity: 1, y: 0 },
};
