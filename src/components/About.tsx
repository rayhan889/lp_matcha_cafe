import { locations } from "../constants/locations";
import { ArrowUpRight, MapPin } from "lucide-react";
import { Link } from "react-router";
import { useRef } from "react";
import { motion, useInView } from "motion/react";

const About = () => {
  const ref = useRef<HTMLDivElement>(null);

  const aboutUsTextLines = ["About", "Us"];

  const isInview = useInView(ref, { once: true });

  const pullupVariant = {
    initial: { y: 20, opacity: 0 },
    animate: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.5,
      },
    }),
  };

  return (
    <div className=" h-fit container mx-auto max-w-7xl px-5 lg:px-0 py-14">
      <div className="flex flex-col w-full gap-y-10">
        <div className="flex flex-col md:flex-row items-start justify-between gap-y-10 md:gap-0">
          <div className="flex items-center gap-x-3">
            {aboutUsTextLines.map((word, i) => {
              return (
                <motion.div
                  key={i}
                  ref={ref}
                  initial="initial"
                  animate={isInview ? "animate" : ""}
                  custom={i}
                  variants={pullupVariant}
                  className="text-zinc-950 font-bold text-3xl"
                >
                  {word === "" ? <span>&nbsp;</span> : word}
                </motion.div>
              );
            })}
          </div>
          <p className=" text-zinc-500 tracking-wide text-justify md:w-[30rem] w-fit text-sm">
            We bring authentic Japanese matcha to life. Sourced from premium tea
            farms, our matcha is crafted into rich drinks and desserts, blending
            tradition with modern flavors.
          </p>
        </div>
        <hr className="w-full h-1 text-gray-300" />
        <div className="flex flex-col md:flex-row items-center justify-between md:gap-x-8 gap-y-8">
          {locations.map((location, i) => (
            <Link
              key={i}
              to={location.maps}
              className="h-12 w-full flex flex-col justify-start gap-y-2 group"
            >
              <h3 className="text-lg font text-zinc-950 flex items-center gap-x-2">
                <span>{location.city}</span>
                <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300 ease-in-out" />
              </h3>
              <span className="text-sm text-zinc-500 flex items-center gap-x-2">
                <MapPin className="w-4 h-4 " />
                <p>{location.street}</p>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
