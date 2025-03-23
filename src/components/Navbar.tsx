import { Link } from "react-router";
import { navLinks } from "../constants/navlinks";
import { motion } from "motion/react";

const Navbar = () => {
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 hidden h-20 items-center justify-between  lg:flex bg-transparent">
      <div className="container mx-auto flex w-full max-w-7xl items-center justify-between">
        <Link to="/" className="hidden md:block">
          <h3 className="text-2xl font-bold text-white leading-tight tracking-wide ">
            IJOIJO
          </h3>
        </Link>

        <ul className="flex items-center gap-x-2 md:gap-x-4">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link to={link.path}>
                <span className="text-white/75 hover:text-white transition-colors delay-75">
                  {link.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <motion.button
          className="cursor-pointer rounded-full bg-white text-zinc-950 px-6 py-2 text-sm font-medium"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Contact Us
        </motion.button>
      </div>
    </nav>
  );
};

export default Navbar;
