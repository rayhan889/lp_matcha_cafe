import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion, useInView } from "motion/react";

const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);

  const headerTextLines = [
    ["Authentic"],
    ["Japanese", "Matcha,"],
    ["Crafted", "for", "You!"],
  ];
  let wordIndex = 0;

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
    <section className="relative h-full w-full">
      <div className="h-[100vh] w-screen absolute left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden -z-50">
        <div className="w-full absolute top-0 left-0 z-2 h-80 bg-gradient-to-b from-black to-black/0"></div>
        <img
          className="top-0 object-cover w-full h-full scale-x-[-1]"
          src="/images/header_img.jpg"
          alt="header_img"
        />
        <div className="w-full absolute bottom-0 left-0 z-2 h-80 bg-gradient-to-t from-black to-black/0"></div>
      </div>

      <div className="container mx-auto h-full max-w-7xl py-20 grid grid-rows-2">
        <div className="h-full w-full flex items-start justify-start pt-24">
          <div className="flex flex-col gap-3 text-white">
            <h3 className="text-xl md:text-3xl font-bold">🌿 マッチャの故郷</h3>
            <div ref={ref} className="flex flex-col">
              {headerTextLines.map((line, lineIndex) => (
                <div key={lineIndex} className="flex flex-wrap gap-x-3">
                  {line.map((word, i) => {
                    // Calculate and increment the global word index
                    const currentWordIndex = wordIndex++;
                    return (
                      <motion.div
                        key={`${lineIndex}-${i}`}
                        initial="initial"
                        animate={isInview ? "animate" : ""}
                        custom={currentWordIndex}
                        variants={pullupVariant}
                        className="text-5xl md:text-7xl font-extrabold tracking-tighter"
                      >
                        {word === "" ? <span>&nbsp;</span> : word}
                      </motion.div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="h-full w-full flex items-end justify-end">
          <div className="flex flex-col gap-3 text-white items-end">
            <p className="text-xs md:text-sm text-justify w-[15rem] md:w-[20rem] tracking-wide">
              Savor the rich flavors of hand-selected matcha, sourced from the
              finest Japanese tea farms. Every sip is a blend of tradition and
              craftsmanship, bringing you the perfect balance of taste, aroma,
              and wellness.
            </p>
            <button className="border border-zinc-500 cursor-pointer rounded-full bg-transparent hover:bg-white hover:text-zinc-950 transition-colors duration-300 text-white px-6 py-2 text-sm font-medium flex items-center gap-2 group">
              Learn More
              <ArrowUpRight
                size={20}
                className="group-hover:rotate-[135deg] transition-transform duration-300 ease-in-out"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
