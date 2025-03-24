import { Link } from "react-router";
import { navLinks } from "../constants/navlinks";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 hidden h-20 items-center justify-between lg:flex transition-colors duration-300 ${
        isScrolled
          ? "bg-zinc-950/60 shadow-sm backdrop-blur-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex w-full max-w-7xl items-center justify-between">
        <Link to="/" className="hidden md:block">
          <h3
            className={`text-2xl font-bold leading-tight tracking-wide transition-colors duration-300 ${
              isScrolled ? "text-white" : "text-white"
            }`}
          >
            IJOIJO
          </h3>
        </Link>

        <ul className="flex items-center gap-x-2 md:gap-x-4">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link to={link.path}>
                <span
                  className={`transition-colors duration-300 ${
                    isScrolled
                      ? "text-white/75 hover:text-white"
                      : "text-white/75 hover:text-white"
                  }`}
                >
                  {link.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <motion.button
          className={`cursor-pointer rounded-full px-6 py-2 text-sm font-medium transition-colors duration-300 ${
            isScrolled
              ? "bg-white text-zinc-950 hover:bg-zinc-100"
              : "bg-white text-zinc-950 hover:bg-zinc-100"
          }`}
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
