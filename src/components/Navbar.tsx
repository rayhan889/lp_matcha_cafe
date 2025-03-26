import { navLinks } from "../constants/navlinks";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px -50% 0px",
      threshold: 0,
    };

    const observerCallback: IntersectionObserverCallback = entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    navLinks.forEach(link => {
      const element = document.getElementById(link.path);
      if (element) observer.observe(element);
    });

    const heroSection = document.getElementById("hero");
    if (heroSection) observer.observe(heroSection);

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 hidden h-20 items-center justify-between lg:flex transition-colors duration-300 ${
        isScrolled
          ? "bg-zinc-950/60 shadow-sm backdrop-blur-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex w-full max-w-7xl items-center justify-between">
        <button
          onClick={() => scrollToSection("hero")}
          className="hidden md:block cursor-pointer"
        >
          <h3
            className={`text-2xl font-bold leading-tight tracking-wide transition-colors duration-300 ${
              isScrolled ? "text-white" : "text-white"
            }`}
          >
            IJOIJO
          </h3>
        </button>

        <ul className="flex items-center gap-x-2 md:gap-x-4">
          {navLinks.map((link, index) => (
            <li key={index}>
              <button
                onClick={() => scrollToSection(link.path)}
                className={`transition-colors duration-300 cursor-pointer ${
                  activeSection === link.path
                    ? "text-white"
                    : "text-white/45 hover:text-white"
                }`}
              >
                {link.name}
              </button>
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
