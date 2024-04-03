import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4 fixed top-0 w-full z-[999]">
      <div className="container mx-auto flex items-center">
        <NavLink to="/" className="text-white font-extrabold   text-md sm:text-lg md:text-xl lg:text-2xl xl:text-4xl">
          Website
        </NavLink>
        <button className="ml-auto text-white block sm:hidden" onClick={toggleNavbar}>
          <AiOutlineMenu size={30} />
        </button>
        <ul className="hidden sm:flex ml-auto space-x-4">
          <NavLink to="/main" className="text-white  text-lg lg:text-2xl">
            Home
          </NavLink>
          <NavLink to="/about" className="text-white  text-lg lg:text-2xl">
            About
          </NavLink>
        </ul>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-75 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="fixed top-0 right-0 p-4">
              <button className="text-white" onClick={toggleNavbar}>
                <AiOutlineClose size={30} />
              </button>
            </div>
            <motion.div
              className="fixed inset-y-0 flex justify-center items-center bg-black bg-transparent p-4 w-3/4"
              initial={{ y: '-100%' }}
              animate={{ y: 0 }}
              exit={{ y: '-100%' }}
              transition={{ duration: 0.5, ease: [0.6, 0.05, 0.01, 0.9] }}
            >
              <ul className="text-white font-bold text-lg lg:text-6xl flex flex-col items-center space-y-4">
                <motion.li
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                >
                  <NavLink to="/main" onClick={toggleNavbar}>
                    Home
                  </NavLink>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                >
                  <NavLink to="/about" onClick={toggleNavbar}>
                    About
                  </NavLink>
                </motion.li>
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
