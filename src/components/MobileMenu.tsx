import { useState, useEffect } from "react";
import { Link } from "react-router";
import { Menu, X } from "lucide-react";
import { navLinks } from "../constants/navlinks";
import { motion } from "motion/react";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleToggleOpen = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <>
      <nav
        className={`fixed left-0 right-0 top-0 z-50 flex h-20 items-center justify-between transition-colors duration-300 ${
          isScrolled || isOpen
            ? "bg-zinc-950/60 backdrop-blur-sm"
            : "bg-transparent"
        } lg:hidden`}
      >
        <div className="container mx-auto flex w-full max-w-7xl px-5 items-center justify-between">
          <div className="flex items-center">
            <div className="flex items-center gap-3 text-white">
              <button
                onClick={handleToggleOpen}
                className="relative h-6 w-6 flex items-center justify-center"
              >
                <span
                  className={`absolute transition-all duration-500 ease-in-out transform ${
                    isOpen
                      ? "opacity-100 rotate-0"
                      : "opacity-0 -rotate-90 scale-50"
                  }`}
                >
                  <X size={24} />
                </span>
                <span
                  className={`absolute transition-all duration-500 ease-in-out transform ${
                    isOpen
                      ? "opacity-0 rotate-90 scale-50"
                      : "opacity-100 rotate-0"
                  }`}
                >
                  <Menu size={24} />
                </span>
              </button>
              <Link to="/">
                <h3 className="text-xl font-bold leading-tight tracking-wide">
                  IJOIJO
                </h3>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <aside
        className={`fixed top-0 z-50 h-screen w-full transition-transform duration-500 lg:hidden ${
          isOpen ? "-translate-y-0 mt-20" : "-translate-y-full"
        }`}
      >
        <div className="h-full overflow-y-auto backdrop-blur-sm bg-zinc-950/60 px-3 py-4 shadow-sm flex flex-col items-center gap-14">
          <ul className="flex flex-col justify-center items-center gap-14">
            {isOpen && (
              <>
                {navLinks.map((link, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.8,
                      scale: {
                        type: "spring",
                        visualDuration: 0.5,
                        bounce: 0.5,
                      },
                    }}
                  >
                    <Link to={link.path}>
                      <span className="text-white/75 hover:text-white transition-colors duration-300 text-lg">
                        {link.name}
                      </span>
                    </Link>
                  </motion.li>
                ))}
              </>
            )}
          </ul>
          <motion.button
            className="cursor-pointer rounded-full bg-white text-zinc-950 px-6 py-2 hover:bg-zinc-100 transition-all duration-300 font-medium"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Contact Us
          </motion.button>
        </div>
      </aside>
    </>
  );
};

export default MobileMenu;
